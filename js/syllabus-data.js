/**
 * STEM AERO - Syllabus Data File
 * 
 * IMPORTANT: In accordance with STEM AERO curriculum confidentiality guidelines,
 * this file contains ONLY the chapter names and high-level 1-line teaser descriptions
 * (maximum 12 words each).
 * 
 * Project names, component lists, hardware platforms, learning objectives,
 * and practical exercises are NOT disclosed here.
 * 
 * To edit or add chapters, update the JSON structure below.
 */

const STEM_AERO_SYLLABUS = {
  classes: [
    {
      id: "class-3",
      classNumber: 3,
      className: "Class 3",
      level: "Beginner",
      coding: "Scratch",
      focus: "Hands-on discovery of everyday mechanisms, circuits, and visual coding blocks.",
      chapters: [
        {
          number: "01",
          name: "STEM Around Us",
          teaser: "Discover the wonders of science and engineering in everyday life."
        },
        {
          number: "02",
          name: "What Is a Robot?",
          teaser: "Explore what machines can do and how automated helpers work."
        },
        {
          number: "03",
          name: "Simple Machines",
          teaser: "Understand levers, pulleys, and gears that make tasks easier."
        },
        {
          number: "04",
          name: "Force and Motion",
          teaser: "Experiment with pushes, pulls, gravity, and energetic physical motion."
        },
        {
          number: "05",
          name: "Wheels and Mechanisms",
          teaser: "Learn how spinning axles and wheels create smooth robotic movement."
        },
        {
          number: "06",
          name: "Introduction to Circuits",
          teaser: "Connect basic battery circuits to illuminate lights and trigger sounds."
        },
        {
          number: "07",
          name: "Sensors Around Us",
          teaser: "Find out how smart devices sense temperature, light, and touch."
        },
        {
          number: "08",
          name: "Introduction to Coding",
          teaser: "Start creating fun visual stories and animations with colorful code."
        },
        {
          number: "09",
          name: "Conditions and Decisions",
          teaser: "Teach characters to make smart choices using simple if-then blocks."
        },
        {
          number: "10",
          name: "Loops and Patterns",
          teaser: "Discover how repetition blocks automate actions and save coding time."
        },
        {
          number: "11",
          name: "AI Around Us",
          teaser: "Uncover how voice assistants and image recognition assist our world."
        },
        {
          number: "12",
          name: "Young Inventor Challenge",
          teaser: "Combine creative imagination and basic STEM tools into your first invention."
        }
      ]
    },
    {
      id: "class-4",
      classNumber: 4,
      className: "Class 4",
      level: "Beginner+",
      coding: "Scratch/mBlock",
      focus: "Foundations of robotics, electronic components, and interactive block logic.",
      chapters: [
        {
          number: "01",
          name: "Robotics in Daily Life",
          teaser: "Explore automated technology assisting homes, hospitals, and aerospace exploration."
        },
        {
          number: "02",
          name: "Parts of a Robot",
          teaser: "Unpack the essential anatomy: controllers, power units, frames, and sensors."
        },
        {
          number: "03",
          name: "Motors and Movement",
          teaser: "Harness electric motors to power wheels and robotic steering mechanisms."
        },
        {
          number: "04",
          name: "Electronics Basics",
          teaser: "Learn safe breadboarding, conductivities, resistors, and protective circuit rules."
        },
        {
          number: "05",
          name: "Buzzer and Indicators",
          teaser: "Add expressive audio signals and blinking LED alerts to hardware."
        },
        {
          number: "06",
          name: "Light Sensors",
          teaser: "Build light-activated gadgets that react to illumination changes automatically."
        },
        {
          number: "07",
          name: "Touch and Distance",
          teaser: "Detect obstacles and physical interactions using smart proximity detectors."
        },
        {
          number: "08",
          name: "Block Programming",
          teaser: "Master drag-and-drop programming concepts to bring hardware logic alive."
        },
        {
          number: "09",
          name: "Conditions",
          teaser: "Code interactive logic gates that trigger actions based on inputs."
        },
        {
          number: "10",
          name: "Loops",
          teaser: "Optimize robotic behaviors using repeatable counting and continuous loops."
        },
        {
          number: "11",
          name: "AI Basics",
          teaser: "Learn how machines perceive patterns and recognize speech inputs."
        },
        {
          number: "12",
          name: "Build a Smart Robot",
          teaser: "Assemble an interactive rover combining sensors, sound, and programmed logic."
        }
      ]
    },
    {
      id: "class-5",
      classNumber: 5,
      className: "Class 5",
      level: "Beginner/Intermediate",
      coding: "mBlock/Arduino basics",
      focus: "Engineering design principles, sensor integration, and introduction to IoT.",
      chapters: [
        {
          number: "01",
          name: "Engineering Design",
          teaser: "Master the step-by-step problem-solving cycle used by professional engineers."
        },
        {
          number: "02",
          name: "DC Motors",
          teaser: "Control speed and directional rotation for dynamic mechanical designs."
        },
        {
          number: "03",
          name: "RGB LED",
          teaser: "Mix primary color spectrums to create vibrant visual lighting alerts."
        },
        {
          number: "04",
          name: "Ultrasonic Sensor",
          teaser: "Measure distances using high-frequency sound waves like bats in flight."
        },
        {
          number: "05",
          name: "Temperature Sensor",
          teaser: "Monitor ambient room heat and trigger automatic cooling reactions."
        },
        {
          number: "06",
          name: "Variables",
          teaser: "Store and update dynamic sensor data in program memory efficiently."
        },
        {
          number: "07",
          name: "Conditions",
          teaser: "Program nested conditional pathways for intelligent robotic decision-making."
        },
        {
          number: "08",
          name: "Loops",
          teaser: "Control automated sensor loops for continuous real-time environment sampling."
        },
        {
          number: "09",
          name: "Water and Environment",
          teaser: "Build ecological monitoring gadgets that protect water and natural habitats."
        },
        {
          number: "10",
          name: "IoT Introduction",
          teaser: "Connect smart devices to networks for remote monitoring and telemetry."
        },
        {
          number: "11",
          name: "Machine Learning Introduction",
          teaser: "Train basic visual classifiers to recognize objects and hand gestures."
        },
        {
          number: "12",
          name: "Smart Robot Challenge",
          teaser: "Engineer a multifunctional autonomous bot tackling real-world environment missions."
        }
      ]
    },
    {
      id: "class-6",
      classNumber: 6,
      className: "Class 6",
      level: "Intermediate",
      coding: "Arduino IDE/intro C++",
      focus: "Transition to microcontroller programming, circuit analysis, and robotic mechanisms.",
      chapters: [
        {
          number: "01",
          name: "Engineering Design Process",
          teaser: "Formulate technical specifications, brainstorm prototypes, and iterate physical models."
        },
        {
          number: "02",
          name: "Arduino Introduction",
          teaser: "Enter open-source physical computing with programmable microcontrollers and boards."
        },
        {
          number: "03",
          name: "Digital Electronics",
          teaser: "Master binary logic levels, digital input reading, and output switching."
        },
        {
          number: "04",
          name: "Analog Electronics",
          teaser: "Read variable voltage spectrums from potent analog sensors smoothly."
        },
        {
          number: "05",
          name: "Sensors and Actuators",
          teaser: "Interface environmental detectors with motorized actuators for active control."
        },
        {
          number: "06",
          name: "Programming Fundamentals",
          teaser: "Bridge graphical blocks into structured text syntax and algorithmic thinking."
        },
        {
          number: "07",
          name: "Conditional Programming",
          teaser: "Implement multi-condition evaluation logic for responsive hardware controllers."
        },
        {
          number: "08",
          name: "Functions",
          teaser: "Structure modular, reusable code routines for clean embedded microcontroller programming."
        },
        {
          number: "09",
          name: "Robotic Mechanisms",
          teaser: "Construct robust chassis linkages, gearboxes, and articulated steering systems."
        },
        {
          number: "10",
          name: "AI Fundamentals",
          teaser: "Understand how data algorithms categorize information and mimic human perception."
        },
        {
          number: "11",
          name: "Data and Machine Learning",
          teaser: "Collect dataset samples to train predictive models for practical tasks."
        },
        {
          number: "12",
          name: "Robotics Integration",
          teaser: "Combine microcontroller logic, sensors, and mechanical assemblies into synchronized prototypes."
        }
      ]
    },
    {
      id: "class-7",
      classNumber: 7,
      className: "Class 7",
      level: "Intermediate",
      coding: "Arduino/mBlock/intro Python",
      focus: "Advanced sensor interfacing, motor kinematics, and IoT smart systems.",
      chapters: [
        {
          number: "01",
          name: "Advanced Robotics",
          teaser: "Explore multi-degree robotic systems and industrial automation standards."
        },
        {
          number: "02",
          name: "Arduino Programming",
          teaser: "Write custom sketches utilizing timers, libraries, and hardware interrupts."
        },
        {
          number: "03",
          name: "Motor Drivers",
          teaser: "Interface H-bridge drivers for high-torque motor speed and polarity control."
        },
        {
          number: "04",
          name: "Servo Motors",
          teaser: "Control precise angular position for robotic arms and directional steering."
        },
        {
          number: "05",
          name: "Advanced Sensors",
          teaser: "Calibrate infrared arrays, ultrasonic transceivers, and gyro orientation sensors."
        },
        {
          number: "06",
          name: "Communication",
          teaser: "Transmit serial data packets between computers and embedded hardware boards."
        },
        {
          number: "07",
          name: "IoT Fundamentals",
          teaser: "Transmit sensor telemetry to cloud dashboards over local wireless networks."
        },
        {
          number: "08",
          name: "Smart Home",
          teaser: "Build energy-efficient home automation nodes with remote relays and triggers."
        },
        {
          number: "09",
          name: "Machine Learning",
          teaser: "Understand training pipelines, features, and model testing on live data."
        },
        {
          number: "10",
          name: "Data Preparation",
          teaser: "Clean, normalize, and organize sensor datasets for training accurate classifiers."
        },
        {
          number: "11",
          name: "AI Applications",
          teaser: "Deploy intelligent classification algorithms to solve daily automation challenges."
        },
        {
          number: "12",
          name: "Integrated Project",
          teaser: "Build an autonomous navigation robot with live cloud telemetry streaming."
        }
      ]
    },
    {
      id: "class-8",
      classNumber: 8,
      className: "Class 8",
      level: "Intermediate/Advanced",
      coding: "Arduino/Python intro",
      focus: "Autonomous line tracking, wireless robotics, and foundational computer vision.",
      chapters: [
        {
          number: "01",
          name: "Robot Architecture",
          teaser: "Analyze embedded bus topologies, power distribution, and modular hardware architectures."
        },
        {
          number: "02",
          name: "Embedded Systems",
          teaser: "Program low-power microcontrollers with optimized memory and peripheral management."
        },
        {
          number: "03",
          name: "Motor Control",
          teaser: "Implement PWM velocity regulation and differential steering motion algorithms."
        },
        {
          number: "04",
          name: "Line Following",
          teaser: "Program high-speed line tracking using PID control and photodiode arrays."
        },
        {
          number: "05",
          name: "Obstacle Avoidance",
          teaser: "Code ultrasonic reactive navigation algorithms for dynamic collision avoidance."
        },
        {
          number: "06",
          name: "Wireless Robotics",
          teaser: "Control robots remotely via Bluetooth, RF, and wireless protocol bridges."
        },
        {
          number: "07",
          name: "IoT and Cloud",
          teaser: "Publish telemetry streams to cloud brokers using standard IoT architectures."
        },
        {
          number: "08",
          name: "AI Concepts",
          teaser: "Study neural concepts, decision trees, and mathematical principles behind intelligence."
        },
        {
          number: "09",
          name: "Machine Learning",
          teaser: "Train supervised models to predict outcomes and classify complex inputs."
        },
        {
          number: "10",
          name: "Computer Vision",
          teaser: "Process digital video streams to detect edges, colors, and motion."
        },
        {
          number: "11",
          name: "AI Ethics",
          teaser: "Evaluate algorithmic fairness, safety limits, and privacy impacts in society."
        },
        {
          number: "12",
          name: "Capstone Robotics",
          teaser: "Engineer an autonomous rover navigating complex obstacle arenas with telemetry."
        }
      ]
    },
    {
      id: "class-9",
      classNumber: 9,
      className: "Class 9",
      level: "Advanced",
      coding: "Python/Arduino/ESP32",
      focus: "Structured Python programming, embedded automation, and autonomous navigation.",
      chapters: [
        {
          number: "01",
          name: "Engineering and Automation",
          teaser: "Explore modern industrial automation, cyber-physical systems, and sensor meshes."
        },
        {
          number: "02",
          name: "Python Basics",
          teaser: "Learn Python programming syntax, data types, and computational reasoning structures."
        },
        {
          number: "03",
          name: "Python Decision Making",
          teaser: "Program complex logical branches, error handling, and structured data validation."
        },
        {
          number: "04",
          name: "Python Loops and Functions",
          teaser: "Build efficient iterative pipelines and modular callable function libraries in Python."
        },
        {
          number: "05",
          name: "Data Structures",
          teaser: "Master lists, dictionaries, tuples, and stacks for efficient robotic computation."
        },
        {
          number: "06",
          name: "Robotics Electronics",
          teaser: "Design robust circuit schematics with voltage regulators, MOSFETs, and relays."
        },
        {
          number: "07",
          name: "Autonomous Navigation",
          teaser: "Formulate waypoint tracking and obstacle avoidance algorithms for autonomous rovers."
        },
        {
          number: "08",
          name: "IoT",
          teaser: "Connect ESP32 Wi-Fi microcontrollers to MQTT brokers and web APIs."
        },
        {
          number: "09",
          name: "AI Fundamentals",
          teaser: "Understand machine perception, training datasets, and inference pipelines on computers."
        },
        {
          number: "10",
          name: "Machine Learning",
          teaser: "Implement regression and classification algorithms for predictive automation systems."
        },
        {
          number: "11",
          name: "Computer Vision",
          teaser: "Detect objects, colors, and spatial contours using Python vision libraries."
        },
        {
          number: "12",
          name: "AI-Robotics Project",
          teaser: "Integrate Python intelligence with ESP32 rovers for smart autonomous navigation."
        }
      ]
    },
    {
      id: "class-10",
      classNumber: 10,
      className: "Class 10",
      level: "Advanced",
      coding: "Python/Arduino/ESP32",
      focus: "Advanced algorithmic thinking, IoT communication protocols, and machine learning.",
      chapters: [
        {
          number: "01",
          name: "Advanced Python",
          teaser: "Implement object-oriented programming, custom classes, and exception-safe file operations."
        },
        {
          number: "02",
          name: "Algorithms",
          teaser: "Analyze sorting, searching, and graph traversal methods for computational efficiency."
        },
        {
          number: "03",
          name: "Data Structures",
          teaser: "Build custom queues, trees, and linked data structures for robotics."
        },
        {
          number: "04",
          name: "Embedded Robotics",
          teaser: "Program ESP32 dual-core processors for concurrent sensing and motor actuation."
        },
        {
          number: "05",
          name: "IoT Communication",
          teaser: "Build bidirectional WebSocket and HTTP REST endpoints for remote telemetry."
        },
        {
          number: "06",
          name: "Artificial Intelligence",
          teaser: "Explore search heuristics, state-space representations, and knowledge graphs in computing."
        },
        {
          number: "07",
          name: "Machine Learning",
          teaser: "Evaluate model accuracy, precision, recall, and prevent dataset overfitting errors."
        },
        {
          number: "08",
          name: "Data Visualization",
          teaser: "Graph live sensor metrics and analytics using dynamic charting libraries."
        },
        {
          number: "09",
          name: "Computer Vision",
          teaser: "Track moving targets and recognize facial contours in real-time video."
        },
        {
          number: "10",
          name: "NLP Introduction",
          teaser: "Process textual commands using tokenization, sentiment detection, and keyword extraction."
        },
        {
          number: "11",
          name: "Responsible AI",
          teaser: "Study data bias mitigation, security vulnerabilities, and responsible AI governance."
        },
        {
          number: "12",
          name: "Capstone",
          teaser: "Develop a connected AI-powered smart automation platform with cloud dashboards."
        }
      ]
    },
    {
      id: "class-11",
      classNumber: 11,
      className: "Class 11",
      level: "Advanced/Senior Secondary",
      coding: "Python/Jupyter/Colab/Arduino",
      focus: "Mathematical foundations of AI, neural networks, and edge computing hardware.",
      chapters: [
        {
          number: "01",
          name: "Foundations of AI",
          teaser: "Study theoretical frameworks, state-space exploration, and statistical learning foundations."
        },
        {
          number: "02",
          name: "Python for AI",
          teaser: "Utilize NumPy and Pandas for high-performance multidimensional matrix manipulation."
        },
        {
          number: "03",
          name: "Data Structures for AI",
          teaser: "Implement hash tables, graph models, and tensor structures for algorithms."
        },
        {
          number: "04",
          name: "Mathematics for AI",
          teaser: "Grasp linear algebra, differential calculus, and probability distributions powering algorithms."
        },
        {
          number: "05",
          name: "Electronics and Embedded Systems",
          teaser: "Configure SPI, I2C, and UART high-speed bus interfaces on microcontrollers."
        },
        {
          number: "06",
          name: "Robotics Kinematics",
          teaser: "Compute forward and inverse kinematic coordinates for articulated robotic manipulators."
        },
        {
          number: "07",
          name: "Control Systems",
          teaser: "Tune closed-loop PID control loops for ultra-smooth mechanical stabilization."
        },
        {
          number: "08",
          name: "Machine Learning",
          teaser: "Implement advanced gradient descent and ensemble learning on complex datasets."
        },
        {
          number: "09",
          name: "Neural Networks",
          teaser: "Design multilayer perceptrons with backpropagation for non-linear pattern recognition."
        },
        {
          number: "10",
          name: "Computer Vision",
          teaser: "Apply convolutional feature maps, object bounding boxes, and visual transformations."
        },
        {
          number: "11",
          name: "Edge AI and IoT",
          teaser: "Deploy quantized lightweight neural inference models directly onto microcontroller hardware."
        },
        {
          number: "12",
          name: "Research Project",
          teaser: "Conduct experimental research tackling engineering challenges with AI-driven prototypes."
        }
      ]
    },
    {
      id: "class-12",
      classNumber: 12,
      className: "Class 12",
      level: "Advanced/Pre-Professional",
      coding: "Python/OpenCV/ML frameworks",
      focus: "Deep learning models, computer vision pipelines, and industrial robotics capstones.",
      chapters: [
        {
          number: "01",
          name: "Advanced AI",
          teaser: "Explore state-of-the-art architectures, generative models, and frontier artificial intelligence trends."
        },
        {
          number: "02",
          name: "AI Programming",
          teaser: "Build end-to-end production pipelines using modern deep learning development environments."
        },
        {
          number: "03",
          name: "Data Science",
          teaser: "Perform exploratory data analysis, feature engineering, and statistical hypothesis testing."
        },
        {
          number: "04",
          name: "Supervised and Unsupervised ML",
          teaser: "Train clustering, dimensionality reduction, and advanced ensemble learning models effectively."
        },
        {
          number: "05",
          name: "Neural Networks and Deep Learning",
          teaser: "Train deep neural architectures using modern regularization, dropouts, and optimizers."
        },
        {
          number: "06",
          name: "Computer Vision",
          teaser: "Implement multi-class object detection, semantic segmentation, and video feature tracking."
        },
        {
          number: "07",
          name: "Natural Language Processing",
          teaser: "Build transformer-based language models, semantic vector embeddings, and conversational agents."
        },
        {
          number: "08",
          name: "Robotics Kinematics",
          teaser: "Solve Jacobian matrices and trajectory planning for multi-axis industrial arms."
        },
        {
          number: "09",
          name: "Autonomous Navigation",
          teaser: "Implement SLAM, LiDAR mapping, and pathfinding algorithms for unmanned systems."
        },
        {
          number: "10",
          name: "Edge AI and Smart Systems",
          teaser: "Optimize neural networks with TensorRT and ONNX for real-time edge devices."
        },
        {
          number: "11",
          name: "AI Ethics, Security and Future",
          teaser: "Analyze adversarial attack defenses, AI alignment, and emerging automation governance."
        },
        {
          number: "12",
          name: "Grand Capstone Project",
          teaser: "Engineer an industry-grade autonomous robotics platform with edge-AI intelligence."
        }
      ]
    }
  ]
};

// Freeze the object to prevent accidental mutation in runtime
if (typeof Object.freeze === 'function') {
  Object.freeze(STEM_AERO_SYLLABUS);
}
