import React from "react";
import PropTypes from "prop-types";
import { add, format } from "date-fns";
import styles from "../Day/Day.module.scss";

const TitleWeek =() =>{
  const titles = ['Пн', 'Вт', 'Ср','Чт','Пт','Сб','Вс'];
  return titles.map((title,i)=> <span key={i}>{title}</span>)
}

const Day = (props) => {
  const { currentDay,setDate } = props;

  const addToDate = (duration)=>{
    const newDate = add(currentDay, duration)
    setDate(newDate);

  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.dayweek}> {format(currentDay, "EEEE")}</h2>
      <h1 className={styles.daymonth}> {format(currentDay, "d")}</h1>
      <h2 className={styles.dayweek}> {format(currentDay, "LLLL")}</h2>

      <p>
        <button onClick ={()=>addToDate({days:1})}>Add 1 day</button>
        <button onClick ={()=>addToDate({months:1})}>Add 1 day</button>
        <button onClick ={()=>addToDate({years:1})}>Add 1 day</button>
      </p>
      <section>
        <TitleWeek/>
      </section>
    </div>
  );
};

Day.defaultTypes = {
  currentDay: new Date(),
};

Day.propTypes = {
  currentDay: PropTypes.object.isRequired,
};
export default Day;
