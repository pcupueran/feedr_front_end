Name: Patty Cupueran
Email: pcpueran@gmail.com
Time to complete: 2h10min

Notes: Using redux makes easier managing the state of the list of meals and dietaries. I could have instead lift up the state to the parent component between unselected and previewed/selected meals and sharing this state between sibling components. However this would be more difficult to manage and the implementation can get messy. I've created three components that seems the most relevant for this exercise: Meal, Dietary and PreviewedMeal. 

It is good to have a separation between the Meal and the PreviewedMeal components, in order to control the selection/removal of meals from the previewed state. The Previewed component is a extension of the Meal component with especial behaviour in this case being able to remove the meal from the preview menu.