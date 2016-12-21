function deleteNode (node, map) {
  // delete children in slot
  const slots = node.slots
  if (slots) {
    Object.keys(slots).forEach(function (key) {
      slots[key].forEach(function (item) {
        deleteNode(item, map)
      })
      slots[key] = []
    })
  }
  node.parentId = null
  // delete reference in  map
  delete map[node._uuid]
}

const types = {
  // 新增节点
  ADD_NODE: 'ADD_NODE',
  // 删除节点
  REMOVE_NODE: 'REMOVE_NODE',
  // 移动节点
  MOVE_NODE: 'MOVE_NODE',
  // 编辑节点
  EDIT_NODE: 'EDIT_NODE'
}

const state = {
  // node节点
  nodes: [],
  // node map
  map: {},
  // 当前node
  current: null
}

const getters = {
  nodes: state => state.nodes,
  map: state => state.map,
  current: state => state.current
}

const actions = {
  // add new Node
  addNode ({commit}, options) {
    commit(types.ADD_NODE, options)
  },
  removeNode ({commit}, options) {
    commit(types.REMOVE_NODE, options)
  },
  moveNode ({commit}, options) {
    commit(types.MOVE_NODE, options)
  },
  editNode ({commit}, options) {
    commit(types.EDIT_NODE, options)
  }
}

const mutations = {
  /**
   * insert new node to component tree
   * @param state
   * @param options 以下是options需要包含的属性
   *  parentId 父节点的id, 如果parentId不存在，则默认插入倒根节点,
   *  slot 需要放置到的插槽
   *  node 新插入的节点
   */
  [types.ADD_NODE] (state, options) {
    const map = state.map
    const nodes = state.nodes
    const node = options.node
    if (map[node._uuid]) {
      console.warn('node has existed in the tree')
      console.warn(node)
      throw new Error('node has existed in the tree')
    } else {
      if (options.parentId) {
        const parentNode = map[node.parentId]
        if (parentNode) {
          var children = parentNode.slots[options.slot]
          children.push(node)
          node.parentId = parentNode._uuid
          state.current = node
        }
      } else {
        nodes.push(node)
      }
      map[node._uuid] = node
    }
  },
  /**
   * move a node to another node
   * @param state
   * @param options below is properties of options
   *  id the node's id  which will be moved
   */
  [types.MOVE_NODE] (state, options) {

  },
  /**
   * delete a node from tree, all children of this node also will be deleted
   * @param state
   * @param options below is properties of options
   *  id  the node's id  which will be deleted
   *  slot the slot where the node was inserted
   */
  [types.REMOVE_NODE] (state, options) {
    const map = state.map
    const nodes = state.nodes
    const nodeId = options.id
    const node = map[nodeId]
    let childrenArr = null

    // delete chilred
    deleteNode(node)

    // node is a root node
    if (!node.parentId) {
      childrenArr = nodes
    } else {
      childrenArr = map[node.parentId].slots[options.slot]
    }

    // delete from parent
    for (let l = childrenArr.length; l; l--) {
      const index = l - 1
      let item = childrenArr[index]
      if (item._uuid === nodeId) {
        childrenArr.splice(index, 1)
      }
    }
  },
  /**
   * edit a node's props
   * @param state
   * @param options
   * id the node's id  which will be edited
   */
  [types.EDIT_NODE] (state, options) {
    state.current = state.map[options.id]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
