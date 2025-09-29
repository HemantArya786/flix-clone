import React from 'react';
import {
    Rank1Svg,
    Rank2Svg,
    Rank3Svg,
    Rank4Svg,
    Rank5Svg,
    Rank6Svg,
    Rank7Svg,
    Rank8Svg,
    Rank9Svg,
    Rank10Svg
} from './RankingSvgs';

const NumericCard = ({data, index}) => {
    const rankingSvgs = {
        1: <Rank1Svg/>,
        2: <Rank2Svg/>,
        3: <Rank3Svg/>,
        4: <Rank4Svg/>,
        5: <Rank5Svg/>,
        6: <Rank6Svg/>,
        7: <Rank7Svg/>,
        8: <Rank8Svg/>,
        9: <Rank9Svg/>,
        10: <Rank10Svg/>
    };

    return (
        <div className=" min-w-[300px] max-w-[300px], h-[220px] flex" >
            <div className="max-w-[120px] max-h-[220px]" >
                 {rankingSvgs[index]}
            </div>
                <img src={data?.[index]?.image} className="h-[220px] w-[160px] object-cover  rounded-tr-lg rounded-br-lg " />
        </div>
    );
};
export default NumericCard;