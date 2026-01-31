import { NextResponse } from "next/server"

export async function GET() {
  try {
    const resumeContent = `
JAMPARAPU THARUN  
Digital Marketing Executive and Web Developer
tharunjamparapu@gmail.com |P: +91 7997788621 | www.linkedin.com/in/jamparapu-tharun  
EDUCATION  
  
OSMANIA UNIVERSITY                                                                                                  HYDERABAD  
Bachelor of science in Statistics                                                                                           2024  
•	Key courses:  Web development, Data analysis, Nodejs, Typescript, Data mining, Computer Communication Network, Statistics with python.
 
SKILLS  
  
•	Programming Languages: Java, Python, C, 
•	Frameworks:                       Pandas, NumPy, Matplotlib  
•	Tools:           WordPress, Figma, Visual studio code, Google colab
•       Design:        Photoshop, Illustrator
•	Data Analysis & Visualization:    Data Cleaning, Data Wrangling, Exploratory Data Analysis (EDA), Statistical Analysis, Hypothesis Testing, Time Series Analysis, Data Visualization. 
 
PROJECTS  
  
A STUDY ON IMPACT OF SOCIAL MEDIA ON MENTAL HEALTH  
•	The relationship between social media usage patterns and mental health outcomes.  
•	Tools used are R studio, Google Colabs, python, pandas, matplotlib.  
•	Cleaning and preprocessing the data, and also implementing EDA to understand the patterns.  
•	Statistical methods used are Regression, Z-test, Chi-Square test and Correlation.  
WEBSITE DEVELOPMENT  
•	Website development on Smartapp software.  
•	This is my portfolio https://jamparaputharun.in/
•	Current I’m working as Digital Marketing Manager at  https://urbaneoutdoor.com/
CERTIFICATIONS  
WEBSITE DEVELOPMENT                                                                      SMARTAPP TECHNOLOGIES  
EXPERIENCE
One year experience in web development and digital marketing at Design Heaven Interiors
20/08/2024 to 30/10/2025
Present I’m working at Urbane Outdoor furniture as digital marketing executive, web development and SEO.

LANGUAGES
English, Telugu, Hindi 

INTERESTS
Photography, Mobile Games, Snapchat Filters, Cricket, Music and Editing

    `

    // Create a simple text-based response that can be downloaded as a file
    const headers = new Headers()
    headers.set("Content-Type", "text/plain; charset=utf-8")
    headers.set("Content-Disposition", 'attachment; filename="Jamparapu_Tharun_Resume.txt"')

    return new NextResponse(resumeContent, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error generating resume:", error)
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 })
  }
}
