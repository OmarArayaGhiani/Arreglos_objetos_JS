rangeMin.oninput = () => { 
    rangeMinValue.value = rangeMin.value
}

rangeMinValue.oninput = () => {
    rangeMin.value = rangeMinValue.value
    if (rangeMinValue.value == ""){
        rangeMin.value = 0
        rangeMinValue.value = 0
    }
    else {
        rangeMin.value = rangeMinValue.value
    }
}

rangeMax.oninput = () => { 
    rangeMaxValue.value = rangeMax.value
}

rangeMaxValue.oninput = () => {
    rangeMax.value = rangeMaxValue.value
    if (rangeMaxValue.value == ""){
        rangeMax.value = 0
        rangeMaxValue.value = 0
    }
    else {
        rangeMax.value = rangeMaxValue.value
    }
}
