import React from 'react'
import UploadImg from './UploadImg'
import Nodata from '../assets/noData.png'
import Image from 'next/image'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
const Product = () => {
  const [selected,setSelected] = React.useState(false)
    const AddPRoduct = ()=>{
        return(
            <div className="w-full h-full flex gap-4 ">
              <div className="w-[60%] bg-white px-4 py-4 rounded-xl">
                <div className="w-full  flex flex-col">
               <h1 className='text-xl font-bold'>General Info</h1> 
                 <TextField
                  className='w-full border py-3 my-2 px-3 rounded-md border-gray-300'
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="standard"
          />
                 <TextField
                  className='w-full border py-3 my-2 px-3 rounded-md border-gray-300'
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="standard"
          />
               <div className="w-full flex gap-2">
               <TextField
                className='w-[50%] border py-3 my-2 px-3 rounded-md border-gray-300'
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
                <select name="" id="" className='w-[50%] border py-3 my-2 px-3 rounded-md border-gray-300' placeholder='Category'>
                    <option value="">Category</option>
                    <option value=""></option>
                </select>
               </div>
               <div className="w-[50%]">
               <TextField
                className='w-full border py-3 my-2 px-3 rounded-md border-gray-300'
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
               </div>
            <div className="">
                <h1 className='text-xl my-4'>Gallery</h1>
                <div className="border w-full flex items-center justify-center h-[200px] border-gray-700 rounded-md">
                <UploadImg/>
                </div>
            </div>
            </div>
            <div className="flex gap-4">
            <button  className='mt-2 uppercase px-4 cursor-pointer text-white bg-[#82b012] py-3 rounded'>SUBMIT</button>
            <button  className='mt-2 uppercase px-4 cursor-pointer text-white bg-gray-500 py-3 rounded'>BACK</button>
            </div>
            </div>
              <div className="w-[40%] ">
              <div className="bg-white rounded-xl flex justify-between px-4">
              <h1 className='py-4 px-4 text-xl font-bold  '>Visible</h1>
              <input type="checkbox" />
              </div>
              </div>
            </div>
        )
    }

    let data =[
      {
        name:'Basmati Rice',
        stock:'In Stock',
        price:1200,
        category:'Rice',
        date:'2021/02/02',
      },
      {
        name:'Beef Boneless Meat',
        stock:'In Stock',
        price:1200,
        category:'Rice',
        date:'2021/02/02',
      },
      {
        name:'Beef Boneless CHawal',
        stock:'In Stock',
        price:1200,
        category:'Rice',
        date:'2021/02/02',
      },
    ]
  const [getData,setGetData] = React.useState<any>(data)
  const [edit,setEdit] = React.useState<any>([])
  const [empty,setEmpty] = React.useState<any>(false)

    const handlerCLick = (name:string,id:number)=>{
      let updateData:any = [...getData]
      if(name == 'Visible'){
        updateData = updateData.filter((items:any,index:number)=>id === index)
      }else if(name == 'Edit'){
        let filter  = updateData.find((items:any,index:number)=>id === index)
        setEdit(filter)
      } else if(name == 'Delete'){
        updateData = updateData.filter((items:any,index:number)=>id !== index)
      }
      data.length?setGetData(updateData):setEmpty(true)
    }
    React.useEffect(() => {
      if(getData == ''){
        setEmpty(true)
      }
    }, [])
    const EditPRoduct = ()=>{
      return(
          <div className="w-full h-full flex gap-4 ">
            <div className="w-[60%] bg-white px-4 py-4 rounded-xl">
              <div className="w-full  flex flex-col">
             <h1 className='text-xl font-bold'>General Info</h1> 
               <TextField
                className='w-full border py-3 my-2 px-3 rounded-md border-gray-300'
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          value={edit.name}
          variant="standard"
        />
               <TextField
                className='w-full border py-3 my-2 px-3 rounded-md border-gray-300'
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
          // value={edit.desc}
          />
             <div className="w-full flex gap-2">
             <TextField
              className='w-[50%] border py-3 my-2 px-3 rounded-md border-gray-300'
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              value={edit.price}
              helperText="Some important text"
              variant="standard"
              />
              <select name="" id="" className='w-[50%] border py-3 my-2 px-3 rounded-md border-gray-300' placeholder='Category'>
                  <option value="">Category</option>
                  <option value=""></option>
              </select>
             </div>
             <div className="w-[50%]">
             <TextField
              className='w-full border py-3 my-2 px-3 rounded-md border-gray-300'
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              value={edit.quantity}
              variant="standard"
              />
             </div>
          <div className="">
              <h1 className='text-xl my-4'>Gallery</h1>
              <div className="border w-full flex items-center justify-center h-[200px] border-gray-700 rounded-md">
              <UploadImg/>
              </div>
          </div>
          </div>
          <div className="flex gap-4">
          <button  className='mt-2 uppercase px-4 cursor-pointer text-white bg-[#82b012] py-3 rounded'>SUBMIT</button>
          <button  className='mt-2 uppercase px-4 cursor-pointer text-white bg-gray-500 py-3 rounded'>BACK</button>
          </div>
          </div>
            <div className="w-[40%] ">
            <div className="bg-white rounded-xl flex justify-between px-4">
            <h1 className='py-4 px-4 text-xl font-bold  '>Visible</h1>
            <input type="checkbox" />
            </div>
            </div>
          </div>
      )
  }
console.log(edit,'edit')
  return (
    <div className='px-4 py-4 bg-[#f8f9fb]'>
      {/* <EditPRoduct/> */}
      {selected?<AddPRoduct/>:(
        <div className="">
        <div className="flex justify-end my-4 mr-4">
            <button onClick={()=>setSelected(true)}  className='mt-2 uppercase px-4 cursor-pointer text-white bg-[#82b012] py-3 rounded'>+ ADD PRODUCT</button>
        </div>
           <table className='w-full '>
        <thead>
          <tr>
            <th className='text-start px-4 py-4 bg-gray-200 border-b border-gray-300'>Name</th>
            <th className='text-start px-4 py-4 bg-gray-200 border-b border-gray-300'>Stock</th>
            <th className='text-start px-4 py-4 bg-gray-200 border-b border-gray-300'>Price</th>
            <th className='text-start px-4 py-4 bg-gray-200 border-b border-gray-300'>Categories</th>
            <th className='text-start px-4 py-4 bg-gray-200 border-b border-gray-300'>Date</th>
            <th className='text-start px-4 py-4 bg-gray-200 border-b border-gray-300'>Action</th>
          </tr>
        </thead>
        
        {empty?<div className="flex justify-center  items-center w-full h-full">
          <Image width={100} height={100} src={Nodata} alt="" />
        </div>:(
        <tbody>
          {getData.map((items:any,index:number)=>(
          <tr key={index}>
            <td className='px-4 py-4 border-b border-gray-300'>{items.name}</td>
            <td className='px-4 py-4 border-b border-gray-300'>{items.stock}</td>
            <td className='px-4 py-4 border-b border-gray-300 '>{items.price}</td>
            <td className='px-4 py-4 border-b border-gray-300'>{items.category}</td>
            <td className='px-4 py-4 border-b border-gray-300'>{items.date}</td>
            <td className='px-4 py-4 border-b border-gray-300 flex gap-2'>
            <span className='cursor-pointer' onClick={()=>handlerCLick('Visible',index)}><VisibilityIcon  style={{ color: "#9cb651" }}/></span>
              <span className='cursor-pointer' onClick={()=>handlerCLick('Edit',index)}><EditIcon  style={{ color: "#9cb651" }}/></span>
              <span className='cursor-pointer' onClick={()=>handlerCLick('Delete',index)}>
                <DeleteIcon  style={{ color: "#9cb651" }}/>
              </span>
            </td>
          </tr>
          ))}
        </tbody>
        )}

      </table>
        </div>
      )}
    </div>
  )
}

export default Product