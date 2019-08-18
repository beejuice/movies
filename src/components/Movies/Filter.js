import React from 'react';


function Filter(props) {

    function sortBy(type){
        props.sortBy(type);
    }

    const SortType = (localProps)=>{

        let direction = (props.sortSettings.direction  > 0) ? String.fromCharCode(8595) : String.fromCharCode(8593);

        if(props.sortSettings.type === localProps.type) {
            return <div onClick={ ()=> sortBy(localProps.type) }><b>{localProps.discription} {direction}</b></div>
        }
        else {
            return <div onClick={ ()=> sortBy(localProps.type) }>{localProps.discription}</div>
        }

    };

    return (
        <div className="Filter">
            <SortType type="localized_name" discription="По названию" />
            <SortType type="year" discription="По году" />
            <SortType type="rating" discription="По рейтингу" />
        </div>
    );

}

export default Filter;