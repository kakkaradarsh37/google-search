import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {IoMdClose} from "react-icons/io"
import { useNavigate, useParams } from 'react-router-dom';

import MicIcon from "../assets/mic.svg"
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const {query} = useParams();
  const[searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

const searchQueryHandler= (event)=>{
  if(event.key=== "Enter" && searchQuery.length>0){
    navigate(`/${searchQuery}/${1}`);
  }
};

    return (
      <div 
      id='searchBox'
      className='h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0'
      >
      <AiOutlineSearch size={18} color="#9aaa0a6"/>
      <input type="text"
      onChange={(e)=> setSearchQuery(e.target.value)}//change the state
      //onKeyUp={(e)=> console.log(e.target.value)}
      onKeyUp= {searchQueryHandler}//as event is passed there
      value={searchQuery}
      autoFocus
      className='grow outline-0 text-black/[0.87]'
      />

      <div className='flex items-center gap-3'>
        {searchQuery &&(
          <IoMdClose
          size={24}
          color='#70757a'
          className='cursor-pointer'
          onClick={()=> setSearchQuery("")}//means that the state will change when the icon is clicked andd will set the value as empty
          />
        )}
      </div>

      <div className='flex items-center gap-3'>
        <img className='h-6 w6 cursor-pointer' src={MicIcon} />
        <img className='h-6 w6 cursor-pointer' src={ImageIcon} />
      </div>
      </div>//here in react we declare variables through useState and in javascript it is declared through let,var,const and the values are passed in the state and below value of useState variable is assigned 
  )
}

export default SearchInput