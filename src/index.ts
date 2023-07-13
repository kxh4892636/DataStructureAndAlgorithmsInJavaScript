
import { List } from './data_structure/list/list'

try {
  const list = new List(10)
  list.get(1)
} catch (error) {
  console.log(error)
}
