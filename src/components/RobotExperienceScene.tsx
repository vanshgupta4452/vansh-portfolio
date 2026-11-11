import { lazy, Suspense, useEffect, useRef, useState } from "react";

const LazyRobotScene = lazy(() => import("@/components/RobotSimulationScene"));

export default function RobotExperienceScene({ progress }: { progress: number }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSceneLoaded(true);
        observer.disconnect();
      }
    }, { rootMargin: "700px 0px" });
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return <div ref={panelRef} className="experience-scene-panel" role="img" aria-label="Scroll animated robotic arm pick and place simulation">
    <div className="experience-scene-render" aria-hidden="true">
      {sceneLoaded
        ? <Suspense fallback={<div className="experience-scene-loader">ROBOTICS / SIMULATION</div>}><LazyRobotScene progress={progress} /></Suspense>
        : <div className="experience-scene-loader">ROBOTICS / SIMULATION</div>}
    </div>
    <div className="experience-scene-hud experience-scene-hud-top"><span>FIELD / 002</span><span><i /> MOTION STUDY</span></div>
    <div className="experience-scene-hud experience-scene-hud-bottom"><span>ROS 2 · C++ · MOTION PLANNING</span><span>ARM / PICK + PLACE</span></div>
    <div className="experience-scene-progress" aria-hidden="true"><span style={{ transform: `scaleX(${Math.max(0, Math.min(1, progress))})` }} /></div>
  </div>;
}
