export const renderDiffDate = function(startDate, endDate){
    let result = "(";
    let diffObj = calculateYearMonth(startDate, endDate);
    if (diffObj.diff_years > 0){
      result += ` ${diffObj.diff_years} ${diffObj.diff_years == 1 ? 'year': 'years'}`
    }
    if (diffObj.diff_years > 0 && diffObj.diff_month > 0){
      result += " and "
    }
    if (diffObj.diff_month > 0){
      result += ` ${diffObj.diff_month} ${diffObj.diff_month == 1 ? 'month': 'months'}`
    }
    // if (diffObj.diff_days > 0){
    //   result += ` and ${diffObj.diff_days} ${diffObj.diff_days == 1 ? 'day': 'days'}`
    // }
    result += " )"
    return result;
  }
  
  const calculateYearMonth = function(startDate, endDate){
    let epoch = new Date('1970-01-01 00:00:00-0600');
  
    // let now = Date.now();
    let now = endDate;
    // let startDate = Date.parse('01 Aug 2018 00:00:00 GMT');
    let diff = new Date(now - startDate);
    
    var diff_years = diff.getYear() - epoch.getYear();
    var diff_month = diff.getMonth() - epoch.getMonth();
    var diff_days = diff.getDate() - epoch.getDate();
  
    return {
      diff_years, diff_month, diff_days
    }
  }