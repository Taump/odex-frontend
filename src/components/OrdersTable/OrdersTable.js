//@flow
import React from 'react'
import OrdersTableRenderer from './OrdersTableRenderer'
import { sortTable } from '../../utils/helpers'
import { ContextMenuTarget, Menu, MenuItem } from '@blueprintjs/core'

import type { Order } from '../../types/Orders'

type Props = {
  orders: Array<Order>,
  authenticated: boolean,
  address: string,
  cancelOrder: string => void,
  onCollapse: string => void,
  onExpand: string => void,
  onResetDefaultLayout: void => void
}

type State = {
  selectedTabId: string,
  isOpen: boolean
}

class OrdersTable extends React.PureComponent<Props, State> {
  static defaultProps = { authenticated: true }

  state = {
    selectedTabId: 'all',
    isOpen: true
  }

  changeTab = (tabId: string) => {
    this.setState({ selectedTabId: tabId })
  }

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    this.props.onCollapse('ordersTable')
  }

  expand = () => {
    this.props.onExpand('ordersTable')
  }

  filterOrders = () => {
    const { orders } = this.props
    let result = { ALL: orders, OPEN: [], CANCELLED: [], AUTO_CANCELLED: [], PARTIAL_FILLED: [], FILLED: [] }
    let filters = ['OPEN', 'CANCELLED', 'AUTO_CANCELLED', 'PARTIAL_FILLED', 'FILLED']

    for (let filter of filters) {
      // silence-error: currently too many flow errors, waiting for rest to be resolved
      result[filter] = orders.filter(order => {
        return order.status === filter
      })
    }

    //The partially filled orders are considered to be in the OPEN section
    result['OPEN'] = result['OPEN'].concat(result['PARTIAL_FILLED'])
    result['CANCELLED'] = result['CANCELLED'].concat(result['AUTO_CANCELLED'])

    for (let filter of filters.concat('ALL')) {
      // silence-error: currently too many flow errors, waiting for rest to be resolved
      result[filter] = sortTable(result[filter], 'time', 'desc')
    }

    return result
  }


  renderContextMenu = () => {
    const {
      state: { isOpen },
      props: { onResetDefaultLayout },
      expand,
      toggleCollapse
    } = this

    return (
        <Menu>
            <MenuItem icon="page-layout" text="Reset Default Layout" onClick={onResetDefaultLayout} />
            <MenuItem icon={isOpen ? "chevron-up" : "chevron-down"} text={isOpen ? "Close" : "Open"} onClick={toggleCollapse} />
            <MenuItem icon="zoom-to-fit" text="Fit" onClick={expand} />
        </Menu>
    );
  }

  render() {
    const {
      props: { authenticated, address, orders, cancelOrder },
      state: { selectedTabId, isOpen },
      renderContextMenu
    } = this

    const filteredOrders = this.filterOrders()
    const loading = orders.length === []

    return (
      <OrdersTableRenderer
        isOpen={isOpen}
        loading={loading}
        selectedTabId={selectedTabId}
        onChange={this.changeTab}
        toggleCollapse={this.toggleCollapse}
        expand={this.expand}
        authenticated={authenticated}
        address={address}
        cancelOrder={cancelOrder}
        // silence-error: currently too many flow errors, waiting for rest to be resolved
        orders={filteredOrders}
        onContextMenu={renderContextMenu}
      />
    )
  }
}

export default ContextMenuTarget(OrdersTable)
