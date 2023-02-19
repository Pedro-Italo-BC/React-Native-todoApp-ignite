import {View, TextInput, TouchableOpacity, Text, FlatList, Alert } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { PlusCircle, ClipboardText } from 'phosphor-react-native'
import { themeColor } from "../../../styles/theme";
import { Task } from "../../components/Task";
import {useState} from 'react'

export interface TaskDataType {
    description: string,
    checked: boolean,
    id: string
}

export function Home() {
    
    const [tasks, setTasks] = useState<TaskDataType[]>([])
    const [textInput, setTextInput] = useState('')

    const taskCompletedAmount = tasks.filter(task => task.checked === true).length

    function handleAddNewTask(){
        if(!textInput){
            return Alert.alert('Invalido!', 'Você precisa passar um valor valido.')
        }
        const newTask = {
            description: textInput,
            checked: false,
            id: String(Math.random())
        }
        setTasks(state => [...state, newTask])
        setTextInput('')
    }

    function handleDeleteTask(id: string){
        Alert.alert('Deletar', 'Tem certeza de que deseja deletar essa tarefa?', [
            {
                text: 'sim', onPress: () => {
                const newTaskList = tasks.filter(task => task.id !== id)
                setTasks(newTaskList)

                Alert.alert('Deletado', 'Essa tarefa foi deletada.')
                }
            },

            {
                text: 'não'
            }

        ])
    }

    // console.log(tasks)

    function handleCheckTasks(id: string) {
        const index = tasks.findIndex(task => task.id === id)

        const newTask = tasks.reduce<TaskDataType[]>((acc, cur, idx) => {
            if(idx === index){
                return [...acc, {...cur, checked: !cur.checked}]
            }

            return [...acc, cur]
        }, [])

        setTasks(newTask)
    }

    console.log(tasks)

    return(
        <>
        <Header/>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput 
                        style={styles.inputArea}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={themeColor['gray-300']}  
                        onChangeText={setTextInput}
                        value={textInput}
                    />
                   
                    <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={handleAddNewTask}
                    >
                        <PlusCircle 
                            color="#fff"
                            size={18}
                        />
                    
                    </TouchableOpacity>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.header}>
                       
                        <View style={styles.contentContanier}>
                            <Text style={styles.created}>Criadas</Text>
                            <Text style={styles.counter}>{tasks.length}</Text>
                        
                        </View>
                       
                        <View style={styles.contentContanier}>
                            <Text style={styles.completed}>Concluidas</Text>
                            <Text style={styles.counter}>{taskCompletedAmount}</Text>
                     
                        </View>
                    </View>

                    <FlatList
                        data={tasks}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                            return  (
                            <Task 
                                key={item.id}
                                onDelete={handleDeleteTask}
                                onCheck={handleCheckTasks}
                                task={item}
                            />
                            )
                        }}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => {
                            return  (
                            <View style={styles.listEmpty}>
                                <ClipboardText color={'#3d3d3d'} size={56}/>

                                <Text style={styles.boldText}>Você ainda não tem tarefas cadastradas</Text>

                                <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                            )
                        }}
                    />
                </View>
            </View>
        </>
    )
}