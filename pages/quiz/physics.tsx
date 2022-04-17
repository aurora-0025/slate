import React from "react";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/clientApp";
import styles from '../../styles/quiz.module.css'

const PhysicsTest = () => {
	const {user} = useAuth();

	const [User, setUser] = useState<any>({userData: null, id:"initial"})

	useEffect(()=> onSnapshot(collection(db, "users"), (snapshot)=> {
		if(user){
			snapshot.docs.map(doc => {if(doc.data().uid == user.uid)
			setUser({ userData: doc.data(), id: (doc.id)});      
			})
		}
	

	}) , [user])

	const questions = [
		{
			questionText: 'Which statement is true for the reflection of light?',
			course: 'reflection_of_light',
			answerOptions: [
				{ answerText: 'The angle of incidence and reflection are equal.', isCorrect: true },
				{ answerText: 'The reflected light is less bright than the incident light.', isCorrect: false },
				{ answerText: 'The sum of angle of incidence and reflection is always greater than 900', isCorrect: false },
				{ answerText: 'The beams of incident light after reflection diverge at unequal angles.', isCorrect: false },
			],
		},
		{
			questionText: 'Image formed by a plane mirror is:',
			course: 'reflection_of_light',
			answerOptions: [
				{ answerText: 'is less than one', isCorrect: true },
				{ answerText: 'is more than one', isCorrect: false },
				{ answerText: 'is equal to one', isCorrect: false },
				{ answerText: 'can be more than or less than one depending upon the position of the object in front of it', isCorrect: false },
			],
		},
		{
			questionText: 'Magnification produced by a rear view mirror fitted in vehicles:',
			course: 'ray_optics',
			answerOptions: [
				{ answerText: 'greater than that of the cladding.', isCorrect: true },
				{ answerText: 'equal to that of the cladding.', isCorrect: false },
				{ answerText: 'smaller than that of the cladding.', isCorrect: false },
				{ answerText: 'independent of that of cladding', isCorrect: false },
			],
		},
		{
			questionText: 'Air bubble in water behaves as',
			course: 'ray_optics',
			answerOptions: [
				{ answerText: 'sometimes concave, sometimes convex lens', isCorrect: false },
				{ answerText: 'concave lens', isCorrect: true },
				{ answerText: 'convex lens', isCorrect: false },
				{ answerText: 'always refracting surface', isCorrect: false },
			],
		},
		{
			questionText: 'A metal coin is at bottom of a beaker filled with a liquid of refractive index = 4/3 to height of 6 cm. To an observer looking from above the surface of liquid, coin will appear at a depth of ?',
			course: 'ray_optics',
			answerOptions: [
				{ answerText: '1.5 cm', isCorrect: false },
				{ answerText: '6.75 cm', isCorrect: false },
				{ answerText: '4.5 cm', isCorrect: true },
				{ answerText: '7.5 cm', isCorrect: false },
			],
		},
		{
			questionText: 'If a convex lens of focal length 80 cm and a concave lens of focal length 50 cm are combined together, what will be their resulting power?',
			course: 'ray_optics',
			answerOptions: [
				{ answerText: '+ 6.5 D', isCorrect: false },
				{ answerText: '– 6.5 D', isCorrect: false },
				{ answerText: '+ 7.5 D', isCorrect: false },
				{ answerText: '– 0.75 D', isCorrect: true },
			],
		},
		{
			questionText: 'The refractive index of the material of an equilateral prism is √3. What is the angle of minimum deviation?',
			course: 'ray_optics',
			answerOptions: [
				{ answerText: '45°', isCorrect: false },
				{ answerText: '60°', isCorrect: true },
				{ answerText: '37°', isCorrect: false },
				{ answerText: '30°', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following statements is true?',
			course: 'ray_optics',
			answerOptions: [
				{ answerText: 'A convex lens has 4 dioptre power having a focal length 0.25 m', isCorrect: true },
				{ answerText: 'A convex lens has -4 dioptre power having a focal length 0.25 m', isCorrect: false },
				{ answerText: 'A concave lens has 4 dioptre power having a focal length 0.25 m', isCorrect: false },
				{ answerText: 'A concave lens has -4 dioptre power having a focal length 0.25 m.', isCorrect: false },
			],
		},
		{
			questionText: 'The laws of reflection hold good for?',
			course: 'reflection_of_light',
			answerOptions: [
				{ answerText: 'plane mirror only', isCorrect: false },
				{ answerText: 'concave mirror only', isCorrect: false },
				{ answerText: 'convex mirror only', isCorrect: false },
				{ answerText: 'all mirrors irrespective of their shape', isCorrect: true },
			],
		},
		{
			questionText: 'In optical fibres, the refractive index of the core is',
			course: 'ray_optics',
			answerOptions: [
				{ answerText: 'greater than that of the cladding', isCorrect: true },
				{ answerText: 'equal to that of the cladding', isCorrect: false },
				{ answerText: 'smaller than that of the cladding', isCorrect: false },
				{ answerText: 'independent of that of cladding', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const router = useRouter()

	async function updateData() {
		router.push('/dashboard')
		User.userData.quiz.physics.done = true;
		User.userData.quiz.physics.marks = score;   
		console.log(User.userData);
	   	await setDoc(doc(db, "users", User.id), User.userData);
	}

	const handleAnswerOptionClick = (answerOption, question) => {
		if (answerOption.isCorrect) {
			setScore(score + 1);
			if(question.course == "ray_optics"){
				User.userData.quiz.physics.course2Marks += 1;
			} else {
				User.userData.quiz.physics.course1Marks += 1;
			}
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<>
		{user && User.userData ? (
			<div className={styles.app}>
				{ User.userData.quiz.physics.done ? (
					<div>
						<p>You have already attended this quiz.</p>	
						<Link href="/dashboard" passHref><button className={styles.endButton}>Proceed</button></Link>
					</div>
				) : (
					<div>
				{showScore ? (
				<div className={styles.scoreSection}>
					You scored {score} out of {questions.length}
					<button className={styles.endButton} onClick={()=>updateData()}>Proceed</button>
				</div>
			) : (
				<div className={styles.container}>
					<div className={styles.questionSection}>
						<div className={styles.questionCount}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className={styles.questionText}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={styles.answerSection}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className={styles.button} onClick={() => handleAnswerOptionClick(answerOption, questions[currentQuestion])}>{answerOption.answerText}</button>
						))}
					</div>
				</div>
			)}
				</div>
			)}	
	</div>
	): <div>loading</div> }
		</>
	);
}
export default PhysicsTest