import { getRandomColor } from '../../utils/style';
import { ExpenseItemProps } from '../types';

const ExpenseItem = (props: ExpenseItemProps) => {
  const {
    expense: { cost, name, description },
  } = props;

  return (
    <>
      <div className="expense-item flex flex-row-reverse bg-gray-100 pl-2 last:pb-2 [&:nth-child(n)]:border-b-gray-300 [&:nth-child(n)]:border-solid [&:nth-child(n)]:border-b-2">
        <div className="expense-item__description flex items-center justify-start w-full h-20">
          <i
            className={`fas fa-shopping-cart text-gray-70 mr-2 ${getRandomColor(
              name,
            )} border-2 border-solid w-12 h-12 flex justify-center items-center rounded-full`}
          ></i>
          <div className='h-fit text-gray-700'>
            <h2 className="text-xl w-auto font-semibold">{name}</h2>
            <p className="text-sm font-thin">{description}</p>
          </div>
        <div className="expense-item__price text-xl  grow text-right pr-3 text-gray-800">{cost} €</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
