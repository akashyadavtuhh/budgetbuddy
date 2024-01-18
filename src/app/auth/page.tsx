"use client";
import { Button, Input, Link, Tab, Tabs } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import React from "react";


export default function App() {
  const [selected, setSelected] = React.useState<string | number>("login");

  return (
    <div className="flex flex-col w-screen h-screen justify-center p-2">
      <h1 className="text-3xl text-center mb-4">nBud</h1>
      <div className="h-1/2">
        <Tabs
          fullWidth
          size="md"
          aria-label="Tabs form"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab key="login" title="Login">
            <form className="flex flex-col gap-4">
              <Input
                isRequired
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <p className="text-center text-small">
                Need to create an account?{" "}
                <Link size="sm" onPress={() => setSelected("sign-up")}>
                  Sign up
                </Link>
              </p>
              <div className="flex flex-col gap-2 justify-end">
                <Button fullWidth color="primary">
                  Login
                </Button>
                <Button
                  fullWidth
                  color="default"
                  onPress={() => signIn("github")}
                >
                  Login Using Github
                  <i className="fab fa-github"></i>
                </Button>
              </div>
            </form>
          </Tab>
          <Tab key="sign-up" title="Sign up">
            <form className="flex flex-col gap-4 h-[300px]">
              <Input
                isRequired
                label="Name"
                placeholder="Enter your name"
                type="password"
              />
              <Input
                isRequired
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <p className="text-center text-small">
                Already have an account?{" "}
                <Link size="sm" onPress={() => setSelected("login")}>
                  Login
                </Link>
              </p>
              <div className="flex flex-col gap-2 justify-end">
                <Button fullWidth color="primary">
                  Sign up
                </Button>
                <Button fullWidth color="default">
                  SignUp Using Github
                  <i className="fab fa-github"></i>
                </Button>
              </div>
            </form>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
