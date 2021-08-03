/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//test https://leetcode.com/problems/number-of-good-pairs/
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,

  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App = () => {

  const [result, setResult] = useState([])

  useEffect(() => {
    randerFunSearch()

  }, []);

  //test 1  https://leetcode.com/problems/number-of-good-pairs/
  // const randerFunTest1 = () => {
  //   var nums = ['1', '2', '3', '1', '1', '3'] //6
  //   console.log("TTITEM INIT = ", nums.slice(0, 3));
  //   var tempNumber;//1 , 2
  //   var tempIndex = -1;//0 , 1
  //   var tempIndex2 = -1;//0 , 1
  //   // var numX =-1;
  //   var array = []
  //   nums.forEach((item) => {
  //     //console.log("ITEM: ", item)
  //     tempNumber = item;
  //     tempIndex++;
  //     console.log("ITEM X tempIndex = ", tempIndex, " tempNumber = ", tempNumber);
  //     nums.forEach((item2) => {
  //       tempIndex2++
  //       console.log("BITEM X item = ", item, " item2 = ", item2, " indexOf = ", nums.indexOf(item2));
  //       if (tempIndex != tempIndex2 && tempIndex2 != 0) {//FIRST
  //         if (tempNumber === item2) {

  //           // var newTempArr = nums.slice(0, tempIndex2);
  //           // var x = newTempArr.indexOf(nums[tempIndex2])
  //           var newArr = "(" + tempIndex + "," + tempIndex2 + ")"
  //           array.push(newArr)
  //           console.log("ADDITEM X array = ", array, " newArr = ", newArr);

  //           //tempIndex2=-1
  //         }
  //         console.log("NITEM X tempIndex = ", tempIndex, " tempNumber = ", tempNumber, " item2 = ", item2);
  //       }

  //     })
  //     tempIndex2 = -1
  //   })
  //   console.log("XITEM final = ", array.slice(0,4));//XITEM final =  (4) ["(0,3)", "(0,4)", "(2,5)", "(3,4)"]
  // }

  const randerFunSearch = () => {
    var nums = ['a', 'b', 'ta']
    const inputName = "hellotata!"
    const newArray = inputName.split('')

    var newNums = []

    var tempCount = 0
    var tempChar = '';
    var tempIndexNum = 0

    nums.forEach((n) => {
      newArray.forEach((char) => {
        if (n.length > 1) {
          if (n[tempIndexNum] === char) {
            tempIndexNum++//0>-1
            tempChar += char//t->a
            if (tempChar === n) {//find value
              tempCount++
              tempChar = ''
              tempIndexNum = 0
            }
          } else {//reset
            tempIndexNum = 0
            tempChar = ''
          }
        }
        if (n === char) {
          tempCount++
        }
      })
      var array = "{" + n + ":" + tempCount + "}"
      newNums.push(array)
      tempCount = 0
    })
    console.log("DSS", "result = ", newNums)
    setResult(newNums)
  }


  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 20, alignSelf: 'center' }}>ทดสอบ ค้นหา text ใน array</Text>
        <Text style={{ marginTop: 5, fontSize: 15, alignSelf: 'center' }}>hellotata! Result = {result}</Text>

        <View style={{ marginTop: 30, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, alignSelf: 'center' }}>SQL query</Text>
          <Text style={{ marginTop: 5, fontSize: 13, }}>SELECT name FROM TEST_CUSER WHERE brand = 'A'</Text>
          <Text style={{ marginTop: 5, fontSize: 13, }}>SELECT count(name) FROM TEST_CUSER WHERE brand = 'A'</Text>
        </View>

      </View>
    </SafeAreaView>

  );
};



export default App;
