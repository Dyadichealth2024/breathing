import React, { useState, useEffect } from 'react';

const BreathingExercise = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [pulse, setPulse] = useState('');
    const [breathHoldTime, setBreathHoldTime] = useState(0);
    const [isBreathing, setIsBreathing] = useState(false);
    const [timer, setTimer] = useState(30);
    const [intervalId, setIntervalId] = useState(null);
    const [score, setScore] = useState(null);
    const [isBreathHolding, setIsBreathHolding] = useState(false); // Add this line

    useEffect(() => {
        if (isBreathing && timer > 0) {
            const countdown = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            return () => clearInterval(countdown);
        } else if (timer === 0) {
            setIsBreathing(false);
            clearInterval(intervalId);
        }
    }, [isBreathing, timer]);

    const startBreathingExercise = () => {
        setIsBreathing(true);
        setTimer(30);
    };

    const handleBreathHoldStart = () => {
        setIsBreathHolding(true);
        const startTime = new Date().getTime();

        const id = setInterval(() => {
            const currentTime = new Date().getTime();
            setBreathHoldTime(Math.floor((currentTime - startTime) / 1000));
        }, 1000);

        setIntervalId(id);
    };

    const handleBreathHoldStop = () => {
        clearInterval(intervalId);
        setIsBreathHolding(false);
    };

    const calculateScore = async () => {
        try {
            const response = await fetch('http://localhost:5000/calculate_score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    age: age,
                    gender: gender,
                    breathHoldTime: breathHoldTime,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setScore(data.score);
            } else {
                alert(data.error || 'An error occurred while calculating the score.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while calculating the score.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Breathing Exercise</h2>
            <p>If you feel uneasy at any time, please stop immediately.</p>

            <div style={styles.inputGroup}>
                <label>Age: </label>
                <input
                    type="number"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    style={styles.input}
                />
            </div>

            <div style={styles.inputGroup}>
                <label>Gender: </label>
                <select
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                    style={styles.input}
                >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div style={styles.section}>
                <h3>Check Your Pulse</h3>
                <button onClick={startBreathingExercise} style={styles.button}>
                    Start 30-second Timer
                </button>
                {isBreathing && <p>Time left: {timer} seconds</p>}
                {!isBreathing && timer === 0 && (
                    <input
                        type="number"
                        placeholder="Enter your pulse"
                        value={pulse}
                        onChange={e => setPulse(e.target.value)}
                        style={styles.input}
                    />
                )}
            </div>

            <div style={styles.section}>
                <h3>Hold Your Breath</h3>
                <p>Press and hold to start the timer, release to stop.</p>
                <button
                    onMouseDown={handleBreathHoldStart}
                    onMouseUp={handleBreathHoldStop}
                    onTouchStart={handleBreathHoldStart}
                    onTouchEnd={handleBreathHoldStop}
                    style={styles.button}
                >
                    Hold Breath
                </button>
                {!isBreathHolding && breathHoldTime > 0 && (
                    <p>You held your breath for {breathHoldTime} seconds</p>
                )}
            </div>

            <div style={styles.section}>
                <button onClick={calculateScore} style={styles.button}>Calculate Score</button>
                {score !== null && <p>Your Score: {score}</p>}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    input: {
        marginLeft: '10px',
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    section: {
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default BreathingExercise;
