import { Chart, registerables } from "chart.js";
import { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";

Chart.register(...registerables);
const textColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--text-color")
  .trim();
const gridColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--grid-color")
  .trim();

interface ExpenseCardProps {
  title: string;
  content: string;
  description: string;
  className?: string;
  contentClassName?: string;
}

function getUpdatedChartData() {
  return {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    backgroundColor: "rgba(255, 0, 0, 1)",
    datasets: [
      {
        label: "# of Votes",
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
}

function ExpenseCard({
  title,
  content,
  description,
  className,
}: ExpenseCardProps) {
  return (
    <div className={` stats  shadow-primary bg-opacity-10 shadow-inner m-4 ${className}`}>
      <div className={`stat `}>
        <div className="stat-title">{title}</div>
        <div className={`stat-value`}>{content}</div>
        <div className="stat-desc text-sm break-words w-full whitespace-break-spaces text-justify text-opacity-50">
          {description}
        </div>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex shadow w-auto">
          <ExpenseCard
            title="Budget"
            content="600 €"
            description="60% of Income"
            className="min-w-fit"
          />
          <ExpenseCard
            title="Income"
            content="1.000 €"
            description=" Income grows when you save !"
            className="w-fit"
          />
        </div>
        <PolarArea
          className="scale-25"
          data={getUpdatedChartData()}
          key={"ExpenseCard"}
          options={{
            plugins: {
              legend: {
                position: "top", // Change the position value to a valid option
              },
              title: {
                display: true,
                text: "Spendings of the month",
              },
            },

            scales: {
              r: {
                grid: {
                  color: gridColor, // Use CSS variable
                },
                ticks: {
                  display: false,
                  color: textColor, // Use CSS variable
                },
              },
            },
          }}
        />
      </div>
      {/* tailwind div with shadow */}
      <div className="mx-3 mt-1">
        <div className="collapse collapse-plus bg-transparent">
          <input type="radio" name="my-accordion-3" checked={true} />
          <div className="collapse-title text-xl font-medium">Category</div>
          <div className="collapse-content p-0 flex">
            <button className="btn w-fit h-full">
              <i className="fas fa-plus"></i>
            </button>
            <div className="carousel carousel-center max-w-md  rounded-box">
              {Array.from(Array(10).keys()).map((_, index) => (
                <div key={index} className="carousel carousel-item">
                  <div
                    className={`stats shadow m-4 border-2 border-primary border-opacity-25`}
                  >
                    <div className={`stat`}>
                      <div className="stat-title text-base">
                        Category {index}
                      </div>
                      <div className={`stat-value font-medium text-base`}>
                        500.00 €
                      </div>
                      <div className="stat-desc text-neutral">Last Month</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="m-4 flex flex-col">
          <div className="text-lg font-semibold">
            Spending{" "}
            <sub className="text-primary text-opacity-50 text-xs">
              {" "}
              March 2023
            </sub>
          </div>
          <div className="carousel carousel-vertical h-96 w-full  rounded-box">
            {Array.from(Array(10).keys()).map((_, index) => (
              <div key={index} className="carousel carousel-item w-full">
                <div className={` mt-2 w-full flex space-x-3 items-center`}>
                  <div className="avatar">
                    <div className="rounded-full w-12">
                      <img
                        className="rounded-full w-12 avatar"
                        src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Bob"
                      />
                    </div>
                  </div>
                  <div className="text-base  grow">
                    <p>Transection {index}</p>
                    <p className="text-xs">{new Date().toDateString()}</p>
                  </div>
                  <div className="text-base text-secondary font-semibold items-end justify-end float-right">
                    40 €
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
