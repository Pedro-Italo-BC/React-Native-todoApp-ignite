import { View, TouchableOpacity, Text } from 'react-native'
import {Trash, Check} from 'phosphor-react-native'
import { themeColor } from '../../../styles/theme'
import {styles} from './styles'
import { TaskDataType } from '../../screens/Home'

interface TaskProps {
    onDelete: (id: string) => void,
    task: TaskDataType,
    onCheck: (id: string) => void
}

export function Task({onDelete, task, onCheck}:TaskProps) {
    return(
        <View style={styles.container}>
            <TouchableOpacity 
            style={task.checked ? styles.checkButtonActived : styles.checkButton}
            activeOpacity={1}
            onPress={() => onCheck(task.id)}
            >

                {task.checked === true && <Check 
                    size={10}
                    color={themeColor['white']}
                />
                }
                
            </TouchableOpacity>
            
            <Text style={task.checked ? styles.textActived : styles.text}>
                {task.description}
            </Text>

            <TouchableOpacity 
            style={styles.trashButton}
            activeOpacity={1}
            onPress={() => onDelete(task.id)}
            >
                <Trash color={themeColor['gray-300']} size={20}/>
            </TouchableOpacity>
        </View>
    )
}