import { Roulette } from 'react-native-roulette-wheel';

export default function Wheel() {
    const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Array of items for the wheel

    const onRotate = (selectedItem) => {
        console.log('Selected Item:', selectedItem);
        // Handle the selected item
    };

    return (
        <Roulette
            data={data}
            onRotate={onRotate}
            radius={150}
            backgroundColor="#fff"
            separatorColor="#000"
            textColor="#000"
            fontSize={18}
        />
    );
}
