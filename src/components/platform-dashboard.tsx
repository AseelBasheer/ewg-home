"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Activity, FileText, TrendingUp, Zap } from "lucide-react";
import { AnimatedCounter, ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const transactionData = [
  { month: "Jan", volume: 4200, processed: 3800 },
  { month: "Feb", volume: 5100, processed: 4700 },
  { month: "Mar", volume: 4800, processed: 4500 },
  { month: "Apr", volume: 6200, processed: 5900 },
  { month: "May", volume: 7100, processed: 6800 },
  { month: "Jun", volume: 8400, processed: 8100 },
];

const documentTypes = [
  { type: "Orders", count: 2840 },
  { type: "Invoices", count: 1920 },
  { type: "Permits", count: 1450 },
  { type: "Reports", count: 980 },
  { type: "Contracts", count: 760 },
];

const statusDistribution = [
  { name: "Approved", value: 45, color: "#00b8e8" },
  { name: "In Review", value: 28, color: "#38bdf8" },
  { name: "Pending", value: 18, color: "#94a3b8" },
  { name: "Archived", value: 9, color: "#64748b" },
];

const kpis = [
  { label: "Active Transactions", value: 12847, icon: Activity, trend: "+12.4%" },
  { label: "Documents Processed", value: 98432, icon: FileText, trend: "+8.7%" },
  { label: "Avg. Processing Time", value: 2.4, suffix: "h", decimals: 1, icon: Zap, trend: "-34%" },
  { label: "Automation Rate", value: 94, suffix: "%", icon: TrendingUp, trend: "+5.2%" },
];

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number; name: string; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border/60 bg-card px-3 py-2 shadow-lg">
      <p className="mb-1 text-xs font-medium text-muted-foreground">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="text-sm font-semibold" style={{ color: entry.color }}>
          {entry.name}: {entry.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
}

export function PlatformDashboard() {
  const [liveTransactions, setLiveTransactions] = useState(12847);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTransactions((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="border-t border-border/60 bg-muted/20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Live Platform Preview
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Interactive command center
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Explore a live preview of the unified platform — real-time transaction monitoring,
            document analytics, and performance dashboards in one secure environment.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl">
            <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground">
                East West Global — Attachment Management Platform
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-green-600">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Live
              </span>
            </div>

            <div className="p-4 sm:p-6">
              <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {kpis.map((kpi) => {
                  const Icon = kpi.icon;
                  const displayValue =
                    kpi.label === "Active Transactions" ? liveTransactions : kpi.value;

                  return (
                    <Card key={kpi.label} className="border-border/40 bg-background/60">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xs font-medium text-muted-foreground">
                          {kpi.label}
                        </CardTitle>
                        <Icon className="h-4 w-4 text-primary/60" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-foreground">
                          {kpi.label === "Active Transactions" ? (
                            displayValue.toLocaleString()
                          ) : (
                            <AnimatedCounter
                              value={kpi.value}
                              suffix={kpi.suffix}
                              decimals={kpi.decimals ?? 0}
                            />
                          )}
                        </div>
                        <p
                          className={`mt-1 text-xs font-medium ${
                            kpi.trend.startsWith("-") ? "text-green-600" : "text-primary"
                          }`}
                        >
                          {kpi.trend} this month
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="rounded-xl border border-border/40 bg-background/40 p-4">
                    <p className="mb-4 text-sm font-medium text-foreground">
                      Transaction Volume — Last 6 Months
                    </p>
                    <ResponsiveContainer width="100%" height={280}>
                      <AreaChart data={transactionData}>
                        <defs>
                          <linearGradient id="volumeGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00b8e8" stopOpacity={0.3} />
                            <stop offset="100%" stopColor="#00b8e8" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="processedGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.3} />
                            <stop offset="100%" stopColor="#94a3b8" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
                        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} stroke="#475569" />
                        <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} stroke="#475569" />
                        <Tooltip content={<ChartTooltip />} />
                        <Area
                          type="monotone"
                          dataKey="volume"
                          name="Total Volume"
                          stroke="#00b8e8"
                          fill="url(#volumeGrad)"
                          strokeWidth={2}
                        />
                        <Area
                          type="monotone"
                          dataKey="processed"
                          name="Auto-Processed"
                          stroke="#94a3b8"
                          fill="url(#processedGrad)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>

                <TabsContent value="documents">
                  <div className="rounded-xl border border-border/40 bg-background/40 p-4">
                    <p className="mb-4 text-sm font-medium text-foreground">
                      Documents by Type — Current Quarter
                    </p>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={documentTypes} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" horizontal={false} />
                        <XAxis type="number" tick={{ fontSize: 12, fill: "#94a3b8" }} stroke="#475569" />
                        <YAxis
                          type="category"
                          dataKey="type"
                          tick={{ fontSize: 12, fill: "#94a3b8" }}
                          stroke="#475569"
                          width={80}
                        />
                        <Tooltip content={<ChartTooltip />} />
                        <Bar dataKey="count" name="Count" radius={[0, 4, 4, 0]}>
                          {documentTypes.map((_, i) => (
                            <Cell
                              key={i}
                              fill={i % 2 === 0 ? "#00b8e8" : "#38bdf8"}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>

                <TabsContent value="analytics">
                  <div className="rounded-xl border border-border/40 bg-background/40 p-4">
                    <p className="mb-4 text-sm font-medium text-foreground">
                      Attachment Status Distribution
                    </p>
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                      <ResponsiveContainer width="100%" height={260}>
                        <PieChart>
                          <Pie
                            data={statusDistribution}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={3}
                            dataKey="value"
                          >
                            {statusDistribution.map((entry) => (
                              <Cell key={entry.name} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="space-y-3">
                        {statusDistribution.map((item) => (
                          <div key={item.name} className="flex items-center gap-3">
                            <span
                              className="h-3 w-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-sm text-muted-foreground">{item.name}</span>
                            <span className="text-sm font-semibold text-foreground">
                              {item.value}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
