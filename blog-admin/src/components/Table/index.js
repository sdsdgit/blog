import Table from './src/Table.vue'

// export interface TableExpose {
//   setProps: (props: Recordable) => void
//   setColumn: (columnProps: TableSetPropsType[]) => void
//   selections: Recordable[]
//   elTableRef: ComponentRef<typeof ElTable>
// }

// Table props
// {
//   pageSize?: number
//   currentPage?: number
//   // 是否多选
//   selection?: boolean
//   // 是否所有的超出隐藏，优先级低于schema中的showOverflowTooltip,
//   showOverflowTooltip?: boolean
//   // 表头
//   columns?: TableColumn[]
//   // 是否展示分页
//   pagination?: Pagination | undefined
//   // 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
//   reserveSelection?: boolean
//   // 加载状态
//   loading?: boolean
//   // 是否叠加索引
//   reserveIndex?: boolean
//   // 对齐方式
//   align?: 'left' | 'center' | 'right'
//   // 表头对齐方式
//   headerAlign?: 'left' | 'center' | 'right'
//   data?: Recordable
//   expand?: boolean
// }

export { Table }
