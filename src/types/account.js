//@flow
export type AccountState = {
  +loaded: boolean,
  +sessionId: ?string,
  +address: ?string,
  +showHelpModal: boolean,
  +exchangeAddress: string,
  +operatorAddress: string,
  +referenceCurrency: ReferenceCurrency,
};

export type AccountParams = {
  address?: ?string,
  showHelpModal?: ?boolean,
  exchangeAddress?: ?string,
  referenceCurrency?: ?ReferenceCurrency,
}

export type UpdateAccountAction = {
  type: 'account/UPDATE_ACCOUNT',
  payload: {
    address: string,
  },
};

export type ReferenceCurrency = {
  name: string,
  symbol: string,
}

export type AccountEvent = any => AccountState => AccountState;
export type AccountAction = UpdateAccountAction;
