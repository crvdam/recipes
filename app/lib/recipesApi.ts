export async function getCategories() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;


  } catch (error) {
     error instanceof Error ? error.message : "Unknown error"

  }
}

export async function getMealsInCategory(strCategory) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;


  } catch (error) {
     error instanceof Error ? error.message : "Unknown error"

  }
}


