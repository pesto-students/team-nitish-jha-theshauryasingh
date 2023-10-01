function partition(arr, l, h){
    let pivot = arr[l];
    let i = l;
    let j = h;
    while(i<j){
        if(arr[i]>pivot){
            i++;
        }
        if(arr[j]<pivot){
            j--;
        }
        if(i<j){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return j;
    }
    
    
    return j
}

function quickSortMethod(arr, l, h){
    // console.log(l, h)
    if (l<h){
        j = partition(arr, l, h)
        quickSortMethod(arr, l, j-1);
        quickSortMethod(arr, j+1, h);
    }
}


function quickSort(arr) {
  const l = 0;
  const h = arr.length - 1;
  quickSortMethod(arr, l, h);
  console.log(arr);
}

quickSort([64, 34, 25, 12, 22, 11, 90])
