import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";

const SingleUserPage = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Devansh Dwivedi</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>Devansh Dwivedi</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>Devansh@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+99999999</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>
          {/* CARD LIST CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="data:image/jpeg;base64,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"  />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Devansh Dwivedi</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Experienced Full Stack Engineer with expertise in
              designing, developing, and maintaining web applications across the
              full software development lifecycle.
            </p>
          </div>
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
