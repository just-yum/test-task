import {FC, useState} from 'react';
import { BoxForm } from './components/BoxForm';
import {View} from "./components/View";

const App: FC = () => {
    const [boxData, setBoxData] = useState<number[][] | null>(null);

    const handleUpdate = (data: number[][]) => {
        setBoxData(data);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <BoxForm onUpdate={handleUpdate} />
            <View boxData={boxData} />
        </div>
    );
};

export default App;