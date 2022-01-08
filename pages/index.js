import React from "react"
import { useForm, Controller } from "react-hook-form"
import Container from "@material-ui/core/Container"

import Input from "@material-ui/core/Input"


import { collection, doc, setDoc } from "firebase/firestore";
import db from "./config/firebase"


export default function Home() {
  const { register, handleSubmit, formState: { errors }, control } = useForm()


  const onSubmit = async (data) => {
    const newQuestionRef = doc(collection(db, "questions"));
    await setDoc(newQuestionRef, data);
  }

  return (
    <>
      <Container>
        <h1 >プログラミング学習の関するアンケート</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Q1. 名前を入力してください(匿名可)</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}

            />
          </div>

          <div>
            <label htmlFor="birth">Q2. 生年月日を入力してください(例: 19900101)</label>
            <Controller
              name="birth"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />
            {
              errors.birth && errors.birth.type === "required" ?
                <span>このフィールドは解答必須です。</span> : null
            }
            {
              errors.birth && errors.birth.type === "pattern" ?
                <span>整数8桁で入力してください。</span> : null
            }
          </div>
          <div>
            <span>Q3. 現在、プログラミングを学習していますか？</span>
            <input
              id="isLearning1"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="isLearning1">はい</label>

            <input
              id="isLearning2"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="isLearning2">いいえ</label>
            {
              errors.isLearning &&
              <span>このフィールドは解答必須です。</span>
            }
          </div>
          <div>
            <span>Q4. これまでに、プログラミングの学習をしたことがありますか？</span>
            <input
              id="wasLearning1"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="true"
              onClick='was1'
            />
            <label htmlFor="wasLearning1">はい</label>

            <input
              id="wasLearning2"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="wasLearning2">いいえ</label>
            {
              errors.wasLearning &&
              <span>このフィールドは解答必須です。</span>
            }
          </div>

          <div>
            <label htmlFor="study">Q5. 今まで学習したことのあるプログラミング言語をすべて教えてください。</label>
            <Controller
              name="study"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />
          </div>


          <input type="submit" value="アンケートを提出する" />
        </form>

      </Container>
    </>

  )
}
