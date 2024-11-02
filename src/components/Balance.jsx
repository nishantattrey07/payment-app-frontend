/* eslint-disable react/prop-types */
export const Balance = ({ Balance }) => {
    const formatBalance = (balance) => {
      return new Intl.NumberFormat("en-IN").format(balance);
    };
    return (
      <>
        <div className="flex gap-2">
          <div className="text-lg font-medium"> Your balance</div>
          <div className="text-lg font-medium">Rs {formatBalance(Balance)}</div>
        </div>
      </>
    );
}