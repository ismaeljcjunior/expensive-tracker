import {useState, useEffect} from 'react'
import * as C from './App.styles';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {categories} from './data/categories'
import {items} from './data/items'
import {filterListByMonth, getCurrentMonth} from './helpers/dateFilter'
import { TableArea } from '../src/components/TableArea'




const App = () => {
  const [list, setList] = useState(items)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [filteredList, setFilteredList] = useState <Item[]>([])
  

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth))

  },[list, currentMonth]);


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Finances</C.HeaderText>
      </C.Header>
      <C.Body>


        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App