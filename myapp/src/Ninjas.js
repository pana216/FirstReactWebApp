import React from 'react';


const Ninjas = ({ninjas, deleteNinja}) => { /* destructuring assignment */
    //const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 23){
    //         return (
    //             <div className="ninja" key = {ninja.id}>
    //               <div> Name: { ninja.name } </div>
    //               <div> Age: { ninja.age }</div>
    //               <div> Belt: { ninja.belt }</div>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // })        
    
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 23 ? (
            <div className="ninja" key = {ninja.id}>
                   <div> Name: { ninja.name } </div>
                   <div> Age: { ninja.age }</div>
                   <div> Belt: { ninja.belt }</div>
                   {/* onClick would be fired instantly if we refresh vistit the page
                   there for we write () => in front of it to call it as an anonymous function
                   to fire only when we click the button  */}
                   <button onClick={() => deleteNinja(ninja.id)}>Delete Ninja</button>  
                 </div>
        ) : null;    
    });
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
        )
    }

export default Ninjas