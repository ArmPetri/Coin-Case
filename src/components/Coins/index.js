import React, {useContext, useState} from 'react'
import {Section, SectionContainer, DataContainerRow, SectionTitle, DataContainer, DataSection, DataContainerTitle, Text, SectionGrid, Logo, UsefulLinks, Links, DataRow, DataName, DataValue, DataPriceSection, DataPrice, TimeFrame, TimeFramePrice, Rank, Social, SocialLinks, SocialIcon} from './CoinsElements'
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

import { CoinContext } from '../../context/coinPageContext'

import facebook from '../../images/social_facebook.svg'
import redit from '../../images/social_redit.svg'
import twitter from '../../images/social_twitter.svg'

const spinnerCss = css`
display: block;
margin: 0 auto;
`

const Coins = () => {
  const [timeFrame, setTimeFrame] = useState(null)

  const {coinData, loading} = useContext(CoinContext)

  const {name, symbol, image, links, market_data} = coinData;
const {thumb} = image || {};
const {homepage, blockchain_site, repos_url, facebook_username, subreddit_url, twitter_screen_name} = links || {};
const {github} = repos_url || {};
const {current_price,
  market_cap_rank,
  market_cap,
  total_volume,
  fully_diluted_valuation,
  price_change_percentage_24h : h24,
  price_change_percentage_7d: d7,
  price_change_percentage_14d: d14,
  price_change_percentage_30d: d30,
  price_change_percentage_60d: d60,
  price_change_percentage_200d: d200,
  price_change_percentage_1y: y1,
  circulating_supply,
  total_supply,
  max_supply,
  ath,
  ath_date} = market_data || {};
let {usd: price} =  current_price || {};
let {usd: Mrkt_Cap} =  market_cap || {};
let {usd: Tot_Vol} = total_volume || {};
let {usd: Dil_Val} = fully_diluted_valuation || {};
const {usd: Ath} = ath || {};
const {usd: Ath_date} = ath_date || {};
const {} = blockchain_site || {};
const {0: home} = homepage || {};

function whichOption(thisOne) {
  let newStr
    if(thisOne.includes('https://www.')){
      newStr = thisOne.split('https://www.')
     } else if(thisOne.includes('http://www.')) {
        newStr = thisOne.split('http://www.')
     } else if(thisOne.includes('https://')){
        newStr = thisOne.split('https://')
     } 
    return newStr;
  }

  return (
    <Section>
      <SectionTitle>Coins</SectionTitle>
       {loading ? <FadeLoader color="#E5ECFA" loading={loading} size={150} css={spinnerCss}></FadeLoader> : <SectionContainer>
        <DataContainer>
          <DataContainerRow>
            <DataRow>
              <DataContainerTitle>
                <Logo src={thumb} alt=""></Logo>{name} ({symbol})
              </DataContainerTitle>
              <Rank>Rank #{market_cap_rank}</Rank>
            </DataRow>
            <DataRow>
              <DataContainerTitle>${price}</DataContainerTitle>
              <Text type={h24 > 0 ? "#44D400" : "#D40044"}>{parseFloat(h24).toFixed(2)}%</Text>
            </DataRow>
            </DataContainerRow>
          <DataContainerRow> 
            <DataSection>
              <DataRow>
                <DataName>Market Cap</DataName>
                <DataValue>${Mrkt_Cap}</DataValue>
              </DataRow>
              <DataRow>
                <DataName>Total Volume</DataName>
                <DataValue>${Tot_Vol}</DataValue>
              </DataRow>
              <DataRow>
                <DataName>Fully Diluted Valuation</DataName>
                <DataValue>{Dil_Val === undefined ? "-" : `$${Dil_Val}`}</DataValue>
              </DataRow>
            </DataSection>
            <DataSection>
              <DataRow>
                <DataName>Circulating Supply</DataName>
                <DataValue>{circulating_supply}</DataValue>
              </DataRow>
              <DataRow>
                <DataName>Total Supply </DataName>
                <DataValue>{total_supply}</DataValue> 
              </DataRow>
              <DataRow>
                <DataName>Max Supply</DataName>
                <DataValue>{max_supply}</DataValue>
              </DataRow>
            </DataSection>
          </DataContainerRow>
          <DataContainerRow>
            <DataPriceSection>
              <DataPrice>
                  <TimeFrame name={h24} onClick={(e) => setTimeFrame(e.target.name)}>24h</TimeFrame>
                  <TimeFrame name={d7} onClick={(e) => setTimeFrame(e.target.name)}>7d</TimeFrame>
                  <TimeFrame name={d14} onClick={(e) => setTimeFrame(e.target.name)}>14d</TimeFrame>
                  <TimeFrame name={d30} onClick={(e) => setTimeFrame(e.target.name)}>30d</TimeFrame>
                  <TimeFrame name={d60} onClick={(e) => setTimeFrame(e.target.name)}>60d</TimeFrame>
                  <TimeFrame name={d200} onClick={(e) => setTimeFrame(e.target.name)}>200d</TimeFrame>
                  <TimeFrame name={y1} onClick={(e) => setTimeFrame(e.target.name)}>1y</TimeFrame>
                </DataPrice>
                  <TimeFramePrice type={timeFrame === null ? "grey" : (timeFrame > 0 ? "#44D400" : "#D40044")}>{timeFrame === null ? "Choose Time Frame" : `${parseFloat(timeFrame).toFixed(2)}%`}</TimeFramePrice>
            </DataPriceSection>
            <DataSection>
              <DataRow>
                <DataName>All Time High</DataName>
                <DataValue>${Ath}</DataValue>
              </DataRow>
              <DataRow>
                <DataName>All Time High Date</DataName>
                <DataValue>{Ath_date === undefined ? '----------' : Ath_date.substr(0, 10)}</DataValue>
              </DataRow>
            </DataSection>
          </DataContainerRow>
        </DataContainer>
        <DataContainer>
          <DataContainerTitle>Info</DataContainerTitle>
          <UsefulLinks>
              Homepage: <Links href={home} target='_blank'>{home === undefined ? "Waiting..." : whichOption(home)}</Links>
            <br />
              Useful Links : {blockchain_site === undefined ? 'Waiting...' : blockchain_site.map((link) => {
              if(link === undefined){
                return "Waiting..."
              } else if(link !== "" && !link.includes('0x') && !link.includes('#')) {
                return <Links href={link} target='_blank'>{link === undefined ? 'Waiting...' : whichOption(link)}</Links>
              } 
            })}
          <br />
          {github === undefined ? "waiting..." : github.length > 1 && "Repos:"
            }
             {github === undefined ? "waiting..." : github.slice(0,2).map((repo) => {
                  return <Links href={repo}>{whichOption(repo)}</Links>
                  })}
           <br />
           <DataRow>
              Community: 
            <Social>
              {facebook_username !== '' && <SocialLinks href={`https://www.facebook.com/${facebook_username}`} target='_blank'><SocialIcon src={facebook}></SocialIcon></SocialLinks>}
              {subreddit_url !== '' && <SocialLinks href={subreddit_url} target='_blank'><SocialIcon src={redit}></SocialIcon></SocialLinks>}
              {twitter_screen_name !== '' && <SocialLinks href={`https://www.twitter.com/${twitter_screen_name}`} target='_blank'><SocialIcon src={twitter}></SocialIcon></SocialLinks>}
            </Social>
           </DataRow>
          </UsefulLinks>
        </DataContainer>
        <SectionGrid> 
        </SectionGrid>
      </SectionContainer>}
    </Section>
  )
}

export default Coins