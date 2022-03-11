import React from "react";
import './TableCustom.scss';

const entry = (title)=>{
  return(
    <div className="entry">
        <h3>{title}</h3>
    </div>
  )
}


const TableCustom = (props) => {
    let propsState = props.state.items;
    let arrayKeys = Object.keys(propsState[0]).filter(item => item != 'name' && item !='__v');
 
    return(

    <div className="wrapper">
      <div className="wrapper__header">
        <div className="wrapper__scroller">  
          {arrayKeys.map((item,iter)=>{
            return  <div className="header__item"  key={`track_${iter}`}>
                        {item}
              </div>
          })}
        </div>
      </div>

      <div className="wrapper__tracks">
        {propsState.map((item,iter)=>{
          return <div className="tracks__item" key={`track__${iter}`}>
                    {entry(item.address.street)}
                    {entry(item.id)}
                    {entry(item.email)}
                    {entry(item.username)}
                    {entry(item.password)}
                    {entry(item.phone)}
            </div>
        })}
      </div>
    </div>
    
    )
}


export {TableCustom};