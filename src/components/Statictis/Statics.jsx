import { PieChart } from "recharts";

const Statics = () => {
    return (
        <div>
            <h1>Welcome to pie chart</h1>
            <PieChart
            width={1349}
            height={550}
            series={[23,25,55,44]}

            options={{
                // labels: [bangla,english,math,hig]
            }}
            >
                
            </PieChart>
        </div>
    );
};

export default Statics;