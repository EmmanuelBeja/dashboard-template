import React from 'react'

import { Card, CardTitle } from 'reactstrap'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
  VictoryStack,
} from 'victory'

import './CardEarningGrowth.scss'

const data2012 = [
  { month: 'Jan', earnings: 13000 },
  { month: 'Feb', earnings: 15000 },
  { month: 'March', earnings: 14500 },
  { month: 'April', earnings: 11000 },
]

const data2012Two = [
  { month: 'Jan', earnings: 15000 },
  { month: 'Feb', earnings: 12500 },
  { month: 'March', earnings: 19500 },
  { month: 'April', earnings: 13000 },
]

const data2012Three = [
  { month: 'Jan', earnings: 15000 },
  { month: 'Feb', earnings: 18500 },
  { month: 'March', earnings: 19500 },
  { month: 'April', earnings: 13000 },
]

const data2012Four = [
  { month: 'Jan', earnings: 12000 },
  { month: 'Feb', earnings: 11500 },
  { month: 'March', earnings: 16500 },
  { month: 'April', earnings: 18000 },
]

const data2012Five = [
  { month: 'Jan', earnings: 19000 },
  { month: 'Feb', earnings: 12500 },
  { month: 'March', earnings: 17500 },
  { month: 'April', earnings: 18000 },
]

const data2012Six = [
  { month: 'Jan', earnings: 14000 },
  { month: 'Feb', earnings: 13500 },
  { month: 'March', earnings: 12500 },
  { month: 'April', earnings: 11000 },
]

const CardEarningGrowth = (props) => {
  return (
    <Card className="dashboard-section__top-card__earning-growth">
      <CardTitle>
        <div>Earnings Growth</div>
        <div className="card-title__amount">
          KES 25,980
          <i className="fas d-none d-lg-block fa-ellipsis-v" />
        </div>
      </CardTitle>
      <VictoryChart
        height={155}
        domainPadding={{ x: 20 }}
        singleQuadrantDomainPadding={{ x: false }}
      >
        <VictoryAxis
          tickValues={['Jan', 'Feb', 'March', 'April']}
          tickFormat={['Jan', 'Feb', 'March', 'April']}
          crossAxis={false}
        />
        <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
          <VictoryStack colorScale={['#00CFDD', '#E7EDF3']}>
            <VictoryBar
              data={data2012}
              alignment="middle"
              x="month"
              y="earnings"
              active={true}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              labels={({ datum }) => datum.earnings}
              labelComponent={<VictoryTooltip style={{ fill: 'black' }} />}
              barWidth={7}
            />
            <VictoryBar
              data={data2012Two}
              alignment="middle"
              x="month"
              y="earnings"
              active={true}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              cornerRadius={3}
              labels={({ datum }) => datum.earnings}
              labelComponent={<VictoryTooltip style={{ fill: 'black' }} />}
              barWidth={7}
            />
          </VictoryStack>
          <VictoryStack colorScale={['#00CFDD', '#E7EDF3']}>
            <VictoryBar
              data={data2012}
              alignment="middle"
              x="month"
              y="earnings"
              active={true}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              labels={({ datum }) => datum.earnings}
              labelComponent={<VictoryTooltip style={{ fill: 'black' }} />}
              barWidth={7}
            />
            <VictoryBar
              data={data2012Three}
              alignment="middle"
              x="month"
              y="earnings"
              active={true}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              cornerRadius={3}
              labels={({ datum }) => datum.earnings}
              labelComponent={<VictoryTooltip style={{ fill: 'black' }} />}
              barWidth={7}
            />
          </VictoryStack>
          <VictoryStack colorScale={['#00CFDD', '#E7EDF3']}>
            <VictoryBar
              data={data2012Four}
              alignment="middle"
              x="month"
              y="earnings"
              active={true}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              labels={({ datum }) => datum.earnings}
              labelComponent={<VictoryTooltip style={{ fill: 'black' }} />}
              barWidth={7}
            />
            <VictoryBar
              data={data2012Three}
              alignment="middle"
              x="month"
              y="earnings"
              active={true}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              cornerRadius={3}
              labels={({ datum }) => datum.earnings}
              labelComponent={<VictoryTooltip style={{ fill: 'black' }} />}
              barWidth={7}
            />
          </VictoryStack>
          <VictoryStack colorScale={['#00CFDD', '#E7EDF3']}>
            <VictoryBar
              data={data2012Five}
              alignment="middle"
              x="month"
              y="earnings"
              active={true}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              labels={({ datum }) => datum.earnings}
              labelComponent={<VictoryTooltip style={{ fill: 'black' }} />}
              barWidth={7}
            />
            <VictoryBar
              data={data2012Three}
              alignment="middle"
              x="month"
              y="earnings"
              active={true}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              cornerRadius={3}
              labels={({ datum }) => datum.earnings}
              labelComponent={<VictoryTooltip style={{ fill: 'black' }} />}
              barWidth={7}
            />
          </VictoryStack>
          <VictoryStack colorScale={['#00CFDD', '#E7EDF3']}>
            <VictoryBar
              data={data2012Six}
              alignment="middle"
              x="month"
              y="earnings"
              active={true}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              labels={({ datum }) => datum.earnings}
              labelComponent={<VictoryTooltip style={{ fill: 'black' }} />}
              barWidth={7}
            />
            <VictoryBar
              data={data2012Three}
              alignment="middle"
              x="month"
              y="earnings"
              active={true}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              cornerRadius={3}
              labels={({ datum }) => datum.earnings}
              labelComponent={<VictoryTooltip style={{ fill: 'black' }} />}
              barWidth={7}
            />
          </VictoryStack>
        </VictoryGroup>
      </VictoryChart>
    </Card>
  )
}

export default CardEarningGrowth
