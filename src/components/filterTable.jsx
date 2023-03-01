import { useEffect, useState } from "react";
import axios from "axios";
import  BootstrapTable  from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Placeholder } from "react-bootstrap";
const SearchTable = () => {
    const [cid,setcid]=useState([]);
    const [searchTerm,setsearchTerm]=useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const getcustomerdata = async() =>{
        try {
            const data = await axios.get(
              "https://rahulteststorage365.blob.core.windows.net/cidcontainer/cid-data.json?sp=r&st=2023-02-28T13:43:52Z&se=2023-03-14T21:43:52Z&spr=https&sv=2021-06-08&sr=b&sig=pDGf3qnh6RDTHUjxR6GtARILU8qR3NR5wF7WlGU1v64%3D"
            );
            console.log(data.data);
            setcid(data.data);
          } catch (e) {
            console.log(e);
          }
    };
    useEffect(() => {
        getcustomerdata();
      }, []);
    
    const columns = [
        { dataField: 'CustomerID', text: 'Customer ID*     ' ,filter:textFilter(),formatter:(cell) => cell || <>&nbsp;</>},
        { dataField:'directory',text:'Directory      ',filter:textFilter()},
        { dataField: 'url', text: 'Workbook URL',formatter: (cell, row) => {
            return (
              <a href={cell} target="_blank" rel="noopener noreferrer">workbook Link</a>
            );
          }},
      ];
    
    const handleSearchChange = (event) => {
        setsearchTerm(event.target.value);
        setCurrentPage(1);
      };
    
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
      const options = {
        sizePerPage: 10,
        hideSizePerPage: true,
        onPageChange: handlePageChange,
        page: currentPage,
        totalPages: totalPages,
      };
    
    return (
        <div>
            
            <BootstrapTable 
            bootstrap5
            keyField="index" 
            data={cid} 
            columns={columns} 
            pagination={paginationFactory(options)} 
            filter={filterFactory()}/>
        </div>
    );
    /*const getcustomerdata = async() =>{
        try {
            const data = await axios.get(
              "https://rahulteststorage365.blob.core.windows.net/cidcontainer/cid-data.json?sp=r&st=2023-02-27T03:46:01Z&se=2023-03-15T11:46:01Z&spr=https&sv=2021-06-08&sr=b&sig=PhjN5P%2B3cXqlfspMLit%2BtGnT7pjCORp%2FONa4bmF3G28%3D"
            );
            console.log(data.data);
            setcid(data.data);
          } catch (e) {
            console.log(e);
          }
    };
    useEffect(() => {
        getcustomerdata();
      }, []);*/
    
    

    
    /*return ( 
        <div className='container'>
            <input 
            type='text' 
            placeholder='Search..' 
            className='form-control' 
            style={{marginTop:50,marginBottom:20,width:"40%"}}
            value={searchTerm}
            onChange={(e)=>{
                setsearchTerm(e.target.value)
            }}>
            </input>
            
            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <th>Customer ID</th>
                    <th>Workbook URL</th>
                </thead>
                <tbody>
                    {
                        cid.filter((item)=>{
                            if (searchTerm == "") {
                                return item;
                              } else if(item.CustomerID.toLowerCase().includes(searchTerm.toLowerCase()))
                              {
                                return item;
                              }
                        }).map((item, index) => (
                            <tr key={item.index}>
                                <td>{item.CustomerID}</td>
                                <td><a href={item.url} target="_blank">workbook Link</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
           
        </div>
     );*/
}
 
export default SearchTable;