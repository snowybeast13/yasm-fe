import React, { FC } from "react";
import { Employee, Item } from "../../Models/interfaces";

interface ResultsProps {
  personType: Employee[];
  setInput: (item: Item) => void;
  items: Item[];
}

const ResultsDropdown: FC<ResultsProps> = ({
  personType,
  // setUserInput,
  setInput,
  items,
}: ResultsProps): JSX.Element => {

  // const groupBy = (something:Item[]) =>{
  //   return something.reduce((acc:any,curr:Item)=>{
  //     if(curr.type) {
  //       const {type} = curr
  //       const currentItems = acc[type];
  //       console.log('Current Items', currentItems)
  //       return {
  //         ...acc,
  //         [type]:currentItems ? [...currentItems,curr] : [curr]
  //       }
  //     }
  //     return acc;
  //   },[])
  // }
  // console.log(groupBy(items))

  return (

    <div className="select">
      <div className="select__select-wrapper">
        {items.length ? (
          <div>
            <div className="select__select-wrapper__label">
              <span></span>
              <p>PERSON</p>
            </div>
            <div className="select__select-wrapper__items-wrapper">
              {items.map((filteredPersons) => (
                <div
                  key={filteredPersons.item.id}
                  className="select__select-wrapper__items-wrapper__items"
                  onClick={() => setInput(filteredPersons)}
                >
                  <p>{filteredPersons.item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h3>No options</h3>
        )}
      </div>
    </div>


    // <div className="select">
    //   <div className="select__select-wrapper">
    //     {personType.length ? (
    //       <div>
    //         <div className="select__select-wrapper__label">
    //           <span></span>
    //           <p>PERSON</p>
    //         </div>
    //         <div className="select__select-wrapper__items-wrapper">
    //           {personType.map((filteredPersons) => (
    //             <div
    //               key={filteredPersons.person.id}
    //               className="select__select-wrapper__items-wrapper__items"
    //               onClick={() => setInput(filteredPersons)}
    //             >
    //               <p>{filteredPersons.person.name}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     ) : (
    //       <h3>No options</h3>
    //     )}
    //   </div>
    // </div>
  );
};
export default ResultsDropdown;
