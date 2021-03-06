// @flow
import * as notifierActionCreators from '../actions/app'
import * as actionCreators from '../actions/orderForm'

import { 
  getTokenPairsDomain, 
  getOrderBookDomain, 
  getAccountBalancesDomain, 
  getAccountDomain,
  getTokenDomain,
  getOrdersDomain,
} from '../domains/'

import type { State, ThunkAction } from '../../types'
import { parseNewOrderError } from '../../config/errors'
import { minOrderAmount } from '../../utils/helpers'

export default function getOrderFormSelector(state: State) {
  let tokenDomain = getTokenDomain(state)
  let tokenPairDomain = getTokenPairsDomain(state)
  let orderBookDomain = getOrderBookDomain(state)
  let orderDomain = getOrdersDomain(state)
  let accountBalancesDomain = getAccountBalancesDomain(state)
  let currentPair = tokenPairDomain.getCurrentPair()

  let { 
    baseTokenSymbol,
    quoteTokenSymbol,
    baseTokenDecimals,
    quoteTokenDecimals
  } = currentPair

  let { authenticated, address, operatorAddress, exchangeAddress } = getAccountDomain(state)

  let askPrice = orderBookDomain.getAskPrice()
  let bidPrice = orderBookDomain.getBidPrice()
  let bestAskMatcher = orderBookDomain.getBestAskMatcher()
  let bestBidMatcher = orderBookDomain.getBestBidMatcher()
  let selectedOrder = orderBookDomain.getSelectedOrder()
  let tokensBySymbol = tokenDomain.bySymbol()
  
  let [ baseToken, quoteToken ] = accountBalancesDomain.getBalancesBySymbol([baseTokenSymbol, quoteTokenSymbol])

  let baseTokenLockedBalance = orderDomain.lockedBalanceByToken(baseTokenSymbol, address)
  let quoteTokenLockedBalance = orderDomain.lockedBalanceByToken(quoteTokenSymbol, address)
  let baseTokenBalance = baseToken.balance - baseTokenLockedBalance
  let quoteTokenBalance = quoteToken.balance - quoteTokenLockedBalance


  return {
    selectedOrder,
    currentPair,
    baseTokenSymbol,
    quoteTokenSymbol,
    baseTokenBalance,
    quoteTokenBalance,
    baseTokenDecimals,
    quoteTokenDecimals,
    askPrice,
    bidPrice,
    bestAskMatcher,
    bestBidMatcher,
    address,
    operatorAddress,
    exchangeAddress,
    tokensBySymbol,
    authenticated
  }
}

export const defaultFunction = (): ThunkAction => {
  return async (dispatch, getState) => {}
}

