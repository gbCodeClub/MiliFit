import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext } from "react";
import { UserContext } from "@/contexts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const [username] = useContext(UserContext);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  const handlePasswordChangeClick = () => {
    setShowChangePasswordForm(!showChangePasswordForm);
  };

  return (
    <div id="profile-page" className="flex grow flex-col items-center">
      <Card className="my-8 w-5/6 grow">
        <CardHeader>
          <CardTitle>내 정보</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div id="profile-content" className="space-y-4 p-4">
            <div className="flex items-center">
              <div className="flex w-96 items-center">
                <label className="w-32 font-semibold">프로필 사진:</label>
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src="change-when-adding-support-for-profiles"
                    alt="@shadcn"
                  />
                  <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
              </div>
              <Input
                className="ml-4 w-64"
                type="file"
                accept=".jpg, .png, .jpeg, .webp, .svg"
              />
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex w-96 items-center">
                <label className="w-32 font-semibold">이름:</label>
                <span>username</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex w-96 items-center">
                <label className="w-32 font-semibold">구독:</label>
                <span>free/pro</span>
              </div>
              <Button className="ml-4">프로로 업그레이드</Button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex w-96 items-center">
                <label className="w-32 font-semibold">이메일:</label>
                <span>email@example.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex w-96 items-center">
                <label className="w-32 font-semibold">비밀번호:</label>
                <span>********</span>
              </div>
              <Button className="ml-4" onClick={handlePasswordChangeClick}>
                비밀번호 변경
              </Button>
            </div>
            {showChangePasswordForm && (
              <div className="w-2/3 space-y-4 rounded-lg border border-black px-4 py-4">
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold">현재 비밀번호:</label>
                  <Input type="password" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold">새 비밀번호:</label>
                  <Input type="password" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold">새 비밀번호 확인:</label>
                  <Input type="password" />
                </div>
                <Button>변경하기</Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
