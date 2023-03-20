import {BarChart, Bar} from 'recharts';
import {FC} from "react";


const TestBarChart:FC<{color: string, data: any}> = ({color, data}) => {
    return (
        <BarChart width={550} height={400} data={data} style={{margin: '1rem'}}>
            <Bar dataKey="uv" fill={color}/>
        </BarChart>
    );
}

export default TestBarChart;