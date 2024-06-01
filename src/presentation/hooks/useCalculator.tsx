import { useEffect, useRef, useState } from 'react'
import { ScrollView } from 'react-native';
enum Operator{
    add  = '+',
    subtract = '-',
    multiply = 'x',
    divide= '÷'

}
export const useCalculator = () => {

    const [number,setNumber] = useState('0')
    const [prevNumber,setPrevNumber] = useState('0')
    const lastOperation = useRef <Operator>()

    const [formula,setFormula] =useState('0')

    useEffect(() => {
     const subResult = calculateSubResult()
     setPrevNumber(subResult.toString())
    }, [formula])
    


    useEffect(() => {
        if(lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        }
     else{
        setFormula(number)
     }
    }, [number])


    const clean = () =>{
    setNumber('0')
     setPrevNumber('0')
     lastOperation.current = undefined
     setFormula('0')
     
    }


    const deleteOperation = () => {
        let currentSign = ''
        let temporalNumber = number

        if (number.includes('-')){
            currentSign = '-'
            temporalNumber = number.substring(1)
        }
        if(temporalNumber.length > 1){
           return setNumber(currentSign + temporalNumber.slice(0,-1))
        }
        setNumber ('0')
    }



    const toggleSign = () =>{
        if(number.includes('-')){
            return setNumber (number.replace('-',''))
        }
        return setNumber(number.replace('','-'))
    }

    const buildNumber = (numberString:string) =>{
        if(number.startsWith('.') && numberString == '.') return;
        if (number.startsWith('0')|| number.startsWith('-0')){
            //punto decimal
            if (numberString == '.'){
                return setNumber(number + numberString)
            }
            //Evaluar si es otro cero y no hay punto 
            if(numberString == '0' && number.includes('.')){
                return setNumber(number+numberString)
            }
            //Evaluar si es diferente de cero, no hay punto y es el primer numero
            
            if (numberString !== '0' && !number.includes('.')){
                setNumber('')
                return setNumber(numberString)
            }
            //Evitar 0000000
            if(numberString == '0' && !number.includes('.')){
                return
            }
            return setNumber(number + numberString)
        }
    
        setNumber (number + numberString)
    }


   const setLastNumber =()  =>{
    calculateResult()
    if(number.endsWith('.')){
        setPrevNumber(number.slice(0,-1))
    }
    else{
        setPrevNumber(number)
    }
    setNumber('0')

   }


   const divideOperation = ()=>{
    setLastNumber()
    lastOperation.current = Operator.divide
   }


   const multiplyOperation = ()=>{
    setLastNumber()
    lastOperation.current = Operator.multiply
   }


   const subtractOperation = ()=>{
    setLastNumber()
    lastOperation.current = Operator.subtract
   }
   
   
   const addOperation = ()=>{
    setLastNumber()
    lastOperation.current = Operator.add
   }


   const calculateResult = () => {
    const resultado = calculateSubResult()
    setFormula( `${resultado}`)
    lastOperation.current = undefined
    setPrevNumber('0')
   }




   const calculateSubResult= ():number=>{
    const [firstValue,operation,secondValue] = formula.split(' ')
    const numero1 = Number(firstValue)
    const numero2 = Number(secondValue)
    if(isNaN(numero2))return numero1;
    switch(operation){
        case Operator.add :
                return numero1 + numero2
             
         case Operator.subtract :
              return numero1 - numero2
            
             
         case Operator.multiply :
              return numero1 * numero2
           
             
         case Operator.divide :
                return numero1 / numero2
            
             
        default:
            throw new Error('Operation error')
        
    }
   }
  return {
     //Properties
     number,
     prevNumber,
     formula,
     //Methods
     buildNumber,
     toggleSign,
     clean,
     deleteOperation,
     divideOperation,
     multiplyOperation,
     addOperation,
     subtractOperation,
     calculateResult,

  }
   
    
  
}

