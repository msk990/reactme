export function getFirstDayOfWeek(d:Date) {
    // 👇️ clone date object, so we don't mutate it
    const date = new Date(d);
    const day = date.getDay(); // 👉️ get day of week
  
    // 👇️ day of month - day of week (-6 if Sunday), otherwise +1
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  
    return new Date(date.setDate(diff));
  }
  
  export const monday = getFirstDayOfWeek(new Date());

  export const tuesday = new Date(monday)
  tuesday.setDate(tuesday.getDate()+1)

  export const wednesday = new Date(monday)
  wednesday.setDate(wednesday.getDate()+2)

  export const thursday = new Date(monday)
  thursday.setDate(thursday.getDate()+3)

  export const friday = new Date(monday)
  friday.setDate(friday.getDate()+4)
  
  // ✅ Get the last day of the current week (Sunday)
//   const lastDay = new Date(firstDay);
//   lastDay.setDate(lastDay.getDate() + 6);