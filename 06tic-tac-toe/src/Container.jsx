import React from 'react'
import Square from './Square'

const Container = () => {
  return (
    <div className='board-Container'>
        <div className='board-row'>
            <div className='board-cell'>
                <Square/>
                <Square/>
                <Square/>
                </div>
            

            <div className='board-cell'>
                <Square/>
                <Square/>
                <Square/>
                </div>
           
       
            <div className='board-cell'>
                <Square/></div>
            
            
        </div>
    </div>
  )
}

export default Container