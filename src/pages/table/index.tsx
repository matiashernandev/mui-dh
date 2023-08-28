import DataGridMui from "@/components/playground/DataGridMui"
import DenseTable from "@/components/playground/DenseTable"
import VirtualizedList from "@/components/playground/VirtualizedList"

export default function MuiTable() {
  return (
    <div>
      <DenseTable />
      <DataGridMui />
      <VirtualizedList />
    </div>
  )
}
