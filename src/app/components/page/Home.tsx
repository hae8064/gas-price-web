"use client";
import React from "react";
import { HomeContainer } from "./HomeStyle";
import { HorizontalStyle } from "@/GlobalStyle";

export default function Home() {
  return (
    <HomeContainer>
      <header>
        <h2>나만의 주유소</h2>
        <p>평균 기름값</p>
        <HorizontalStyle>
          <div className="gasoline"></div>
          <div className="diesel"></div>
        </HorizontalStyle>
      </header>
    </HomeContainer>
  );
}
