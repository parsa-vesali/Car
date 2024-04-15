import React from "react";
import "./WidgetLg.css";
import { transactions } from "../../datas";

export default function WidgetLg() {
  const Button = ({ type, text }) => {
    return <button className={"WidgetLgButton " + type}>{text}</button>;
  };

  return (
    <div>
      <div className="WidgetLg">
        <h3 className="WidgetLgTitle">تراکنش های اخیر</h3>
        <table className="WidgetLgTable">
          <tr className="WidgetLgTr">
            <th className="WidgetLgTh">مشتری</th>
            <th className="WidgetLgTh">تاریخ</th>
            <th className="WidgetLgTh">مبلغ</th>
            <th className="WidgetLgTh">وضعیت</th>
          </tr>
          {transactions.map((transaction) => (
            <tr className="WidgetLgTr">
              <td className="WidgetLgUser">
                <img
                  src={transaction.img}
                  alt="user"
                  className="WidgetLgImg"
                />
                <span className="WidgetLgName">{transaction.customer}</span>
              </td>
              <td className="WidgetLgDate">{transaction.date}</td>
              <td className="WidgetLgAmount">${transaction.amount}</td>
              <td className="WidgetLgStatus">
                <Button type={transaction.status} text={transaction.text} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}