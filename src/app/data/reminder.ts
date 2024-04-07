import { IReminder } from '../models/reminder'

export const reminder: IReminder[] = [
    {
        "id": 2,
        "short_description": "Купить продукты",
        "description": "Зайти в магазин и купить продукты на неделю",
        "data_created": new Date(2021, 10, 10),
        "data_completed": new Date(2021, 10, 12),
        "status": 3
    },
    {
        "id": 3,
        "short_description": "Записаться на курс английского",
        "description": "Найти подходящий курс английского и записаться на него",
        "data_created": new Date(2021, 9, 15),
        "data_completed": new Date(2021, 9, 19),
        "status": 3
    },
    {
        "id": 5,
        "short_description": "Оплатить счета",
        "description": "Оплатить коммунальные счета до конца месяца",
        "data_created": new Date(2021, 9, 14),
        "data_completed": new Date(2021, 9, 15),
        "status": 2
    },
    {
        "id": 8,
        "short_description": "Подготовить презентацию",
        "description": "Подготовить презентацию для совещания на следующей неделе",
        "data_created": new Date(2021, 9, 20),
        "data_completed": new Date(2021, 9, 21),
        "status": 4
    }, {
        "id": 12,
        "short_description": "Подготовить отчет",
        "description": "Подготовить отчет по результатам прошлого квартала",
        "data_created": new Date(2021, 9, 16),
        "data_completed": new Date(2021, 9, 19),
        "status": 2
    }, {
        "id": 13,
        "short_description": " Забронировать отпуск",
        "description": "Забронировать отпуск на новогодние праздники",
        "data_created": new Date(2021, 9, 16),
        "data_completed": new Date(2021, 10, 19),
        "status": 3
    }, {
        "id": 14,
        "short_description": "Подготовить подарок",
        "description": "Подготовить подарок ко дню рождения друга",
        "data_created": new Date(2021, 9, 24),
        "data_completed": new Date(2021, 10, 11),
        "status": 1
    }, {
        "id": 15,
        "short_description": "Провести собрание",
        "description": "Провести собрание сотрудников для обсуждения текущих задач и планов на будущее",
        "data_created": new Date(2021, 9, 16),
        "data_completed": new Date(2021, 9, 19),
        "status": 2
    }
]