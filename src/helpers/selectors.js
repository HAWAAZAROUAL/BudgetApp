// import expenses from "../../budget_api/src/routes/expenses";
/**
 * 
 * @param {*} budgets 
 * @param {*} userId 
 * @returns EX:user_id=2 {books:200,food:500,2021-09-01,2021-09-30}
 */
export function getBudgetByUserID(budgets, userId) {
  const budgetArr = [];
  for (const i in budgets) {
    if (budgets[i]["user_id"] === userId) {
      budgetArr.push(budgets[i]);
    }
  }
  const result = budgetArr.reverse();
  return result;
}
/**
 * 
 * @param {*} day 
 * @returns convert date to "yyyy-mm-dd" format
 */
function dateFormat(day) {
  let d = new Date(day);

  d = d.toISOString().split('T')[0];
  return d;
}
/**
 * 
 * @param {*} budgets 
 * @param {*} year 
 * @param {*} month 
 * @param {*} userId 
 * @returns EX:2021-09 budget {food:600,books:400......}
 */
export function getBudgetByMonth(budgets, year, month, userId) {

  const result = {};
  let arr = Object.values(budgets);
  for (const budget of arr) {
    if(budget.start_date && budget.end_date){
    const startDate = budget.start_date.split('T')[0];
    const endDate = budget.end_date.split('T')[0];
    const userid = budget.user_id;
    let d1;
    let d2;

    switch (month) {
      case 1:
        d1 = dateFormat(year + '-01-01')
        d2 = dateFormat(year + '-01-31')
        break;
      case 2:
        d1 = dateFormat(year + '-02-01')
        d2 = dateFormat(year + '-02-28')
        break;
      case 3:
        d1 = dateFormat(year + '-03-01')
        d2 = dateFormat(year + '-03-31')
        break;
      case 4:
        d1 = dateFormat(year + '-04-01')
        d2 = dateFormat(year + '-04-30')
        break;
      case 5:
        d1 = dateFormat(year + '-05-01')
        d2 = dateFormat(year + '-05-31')
        break;
      case 6:
        d1 = dateFormat(year + '-06-01')
        d2 = dateFormat(year + '-06-30')
        break;
      case 7:
        d1 = dateFormat(year + '-07-01')
        d2 = dateFormat(year + '-07-31')
        break;
      case 8:
        d1 = dateFormat(year + '-08-01')
        d2 = dateFormat(year + '-08-31')
        break;
      case 9:
        d1 = dateFormat(year + '-09-01')
        d2 = dateFormat(year + '-09-30')
        break;
      case 10:
        d1 = dateFormat(year + '-10-01')
        d2 = dateFormat(year + '-10-31')
        break;
      case 11:
        d1 = dateFormat(year + '-11-01')
        d2 = dateFormat(year + '-11-30')
        break;
      case 12:
        d1 = dateFormat(year + '-12-01')
        d2 = dateFormat(year + '-12-31')
        break;
      default:
        break;
    }

    if ((startDate >= d1) && (endDate <= d2) && (userid === userId)) {
      result[budget["name"]] = [budget["budget_limit"], budget["amount"]];
    }
  }}
  return result;
}
function getCategoryName(result, categories) {
  const obj = {};
  Object.keys(result).map((id) => {

    obj[categories[id].category_type] = result[id];

  });
  return obj;
}
/**
 * 
 * @param {*} expenses 
 * @param {*} categories 
 * @param {*} month 
 * @param {*} userId 
 * @returns EX:{food:600,gas:300,tuition:2000,clothes:500}
 */
export function getExpenseByMonth(expenses, categories, month, userId) {
  const result = {};
  let arr = Object.values(expenses);
  for (const expense of arr) {

    const m = (new Date(expense.date)).getMonth() + 1;

    if (m === month && expense.user_id === userId) {
       if(expense.category_id){
        if (Object.keys(result).includes((expense.category_id).toString())) {

          result[expense.category_id] += Number(expense.amount);
        } else {
          result[expense.category_id] = Number(expense.amount);
        }
       }
     
    }
  }
  return getCategoryName(result, categories);
}
/**
 * 
 * @param {*} incomes 
 * @param {*} month 
 * @param {*} userId 
 * @returns EX: {salary:8000, driver: 800, coach:600}
 */
export function getincomeByMonth(incomes, month, userId) {
  const result = {};

  let arr = Object.values(incomes);
  for (const income of arr) {

    const m = (new Date(income.date)).getMonth() + 1;

    if (m === month && income.user_id === userId) {
      
      if (Object.keys(result).includes((income.income_type).toString())) {

        result[income.income_type] += income.income;
      } else {
        result[income.income_type] = income.income;
      }
    }
  }
  return result;
}
/**
 * 
 * @param {*} incomes 
 * @param {*} userId 
 * @returns EX:{'Jan':4000,'Feb':3900,'Mar':5000,'Apr':3000,'May':8000,
 *            'Jun':7000,'Jul':7000,'Aug':4600,'Sep':8000,'Oct':9000,'Nov':9000,'Dec':100000}
 */
export function getTotalIncome(incomes, userId) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthTotal = {};
  for (let i = 1; i <= 12; i++) {
    const result = getincomeByMonth(incomes, i, userId);
    let total = 0;
    if(result){
      Object.values(result).map((val) => { total += val; }
      );
      monthTotal[month[i - 1]] = total;
    }
   
  }
  return monthTotal;
}


export function getBudgetId(name, budgets) {
  let budgetId;
  if(Object.keys(budgets)){
    Object.keys(budgets).map((k) => {

      if (budgets[k]["name"] === name) {
        budgetId = k;
      }
    });
  }
  return budgetId;
}

export function getQuotesKey(quotes) {
  let quoteKey = Object.keys(quotes);
  return quoteKey;
}
export function getCategoryId(name, categories) {
  let categoryId;
  
  if (Object.keys(categories)) {
    Object.keys(categories).map((k) => {

      if (categories[k]["category_type"] === name) {
        categoryId = k;
        
      }
    });
  }


  return categoryId;
}
export function totalExpenseByMonth(expenses,  categories, month,  userId){
  const  monthExpense= getExpenseByMonth( expenses, categories, month, userId);
 let total = 0;
 for(const val of Object.values(monthExpense)){ 
      total += val;
  }
 return total;
}
