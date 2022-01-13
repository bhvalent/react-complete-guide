import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const items = props.items.map(item =>
        <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
    );

    return (
        <Card className="expenses">
            {items}
        </Card>
    );
}

export default Expenses;