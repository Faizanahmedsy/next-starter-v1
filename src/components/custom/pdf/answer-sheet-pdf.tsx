import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const MarkedAnswerSheetPdf = () => {
  const examData = [
    {
      question: "Who is Albert Einstein, where was he from?",
      answer: "Albert Einstein was a scientist, he was born in Africa",
      totalMarks: 8,
      gainedMarks: 4,
      reason:
        "You gave correct answer for who is Albert Einstein but you were wrong about where he was from.",
    },
    {
      question: "Explain the theory of relativity in simple terms.",
      answer:
        "It's about how time and space are connected and change based on motion.",
      totalMarks: 10,
      gainedMarks: 8,
      reason:
        "Good explanation but missed mentioning the relationship with mass and energy.",
    },
    {
      question: "What is quantum mechanics?",
      answer: "No answer provided",
      totalMarks: 6,
      gainedMarks: 0,
      reason: "Question was left unanswered.",
    },
    {
      question: "List three major contributions of Einstein to physics.",
      answer:
        "Photoelectric effect, Theory of Relativity, Mass-energy equivalence (E=mc²)",
      totalMarks: 6,
      gainedMarks: 6,
      reason:
        "Perfect answer with all three major contributions correctly listed.",
    },
  ];

  const getMarkIcon = (gainedMarks: number, totalMarks: number) => {
    if (gainedMarks === 0) {
      return <XCircle className="text-red-500 h-5 w-5" />;
    } else if (gainedMarks === totalMarks) {
      return <CheckCircle2 className="text-green-500 h-5 w-5" />;
    } else {
      return <CheckCircle2 className="text-yellow-500 h-5 w-5" />;
    }
  };

  const totalMarks = examData.reduce((acc, item) => acc + item.totalMarks, 0);
  const totalGainedMarks = examData.reduce(
    (acc, item) => acc + item.gainedMarks,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-2xl">Marked Answer Sheet</CardTitle>
          <div className="text-sm font-semibold text-gray-700 grid grid-cols-3 gap-4">
            <div>Student Name: John Doe</div>
            <div>Admission Number: 123456</div>
            <div>Subject: English</div>
            <div>Exam Date: 12/09/2021</div>
            <div>Exam Duration: 1 hour</div>

            <div>
              Total Score: {totalGainedMarks}/{totalMarks}
            </div>
          </div>
          <div className="flex gap-4  text-sm text-gray-600">
            <div className="flex items-center gap-1 mt-5">
              <CheckCircle2 className="text-green-500 h-4 w-4" />
              Full Marks
            </div>
            <div className="flex items-center gap-1 mt-5">
              <CheckCircle2 className="text-yellow-500 h-4 w-4" />
              Partial Marks
            </div>
            <div className="flex items-center gap-1 mt-5">
              <XCircle className="text-red-500 h-4 w-4" />
              Zero Marks
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {examData.map((item, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg flex justify-center items-center gap-4">
                      Question {index + 1}
                      {getMarkIcon(item.gainedMarks, item.totalMarks)}
                    </h3>
                  </div>
                  <p className="text-gray-800 mb-2">{item.question}</p>
                  <div className="bg-gray-50 p-3 rounded-md mb-2">
                    <p className="text-gray-600 font-medium mb-1">
                      Student's Answer:
                    </p>
                    <p className="text-gray-800">{item.answer}</p>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-md">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-slate-800">
                        Teacher Comment:
                      </p>
                    </div>
                    <p className="text-slate-700">{item.reason}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-md">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-blue-800">AI Comment:</p>
                      <p className="font-medium text-blue-50 rounded-full bg-blue-400 px-2 py-1">
                        {item.gainedMarks}/{item.totalMarks}
                      </p>
                    </div>
                    <p className="text-blue-700">{item.reason}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MarkedAnswerSheetPdf;
